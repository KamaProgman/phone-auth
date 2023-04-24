import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { BiFilter } from 'react-icons/bi';
import Transactions from "../components/Transaction";

const HistoryPage = () => {
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState([]);
   const [isActive, setIsActive] = useState('all');
   const [total, setTotal] = useState(0);
   const { t } = useTranslation()
   const date = new Date().toLocaleDateString()

   useEffect(() => {
      axios.get('http://localhost:3001/users/1')
         .then(res => {
            setData(res.data.transactions)
            setFilter(res.data.transactions)
         })
   }, []);

   // Expenses for the last month
   useEffect(() => {
      let filtered = data?.filter(item => item.type.name == 'outgoing' && item.date.split('.')[1] === date.split('.')[1])
      setTotal(filtered?.reduce((a, b) => b.sum + a, 0))
   }, [data]);

   const onFilter = (e) => {
      setIsActive(e.target.dataset.action)
      setFilter(data)
      let filtered
      if (e.target.dataset.action) {
         filtered = data.filter(item => item.type.name == e.target.dataset.action)
         setFilter(filtered)
      }
      if (e.target.dataset.action == 'all') setFilter(data)
   }

   return (
      <div className="container">
         <div className="history">
            <h1>{t('history')}</h1>
            <div className="history-box">
               <div className="history-box__item">
                  <div>{t('expenses')}</div>
                  <p>{total / 100 * 99.5} {t('sum')}</p>
               </div>
               <div className="history-box__item">
                  <div>{t('cashback')}</div>
                  <p>{total / 100 * 0.5} {t('sum')}</p>
               </div>
            </div>
         </div>

         <div className="transaction">
            <div className="filter-box">
               <button
                  data-action="all"
                  onClick={(e) => onFilter(e)}
                  disabled={isActive == 'all'}
               >
                  <img src="https://icons.veryicon.com/png/o/leisure/crisp-app-icon-library-v3/filter-10.png" alt="filter" className="w-6" />
               </button>
               <button
                  data-action="incoming"
                  onClick={(e) => onFilter(e)}
                  disabled={isActive == 'incoming'}
               >{t('receive')}</button>
               <button
                  data-action="outgoing"
                  onClick={(e) => onFilter(e)}
                  disabled={isActive == 'outgoing'}
               >{t('spent')}</button>
            </div>

            <Transactions data={filter} />

         </div>
      </div>
   );
}

export default HistoryPage;