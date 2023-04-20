import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Transaction from '../components/Transaction';
import { BiFilter } from 'react-icons/bi';

const HistoryPage = () => {
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState([]);
   const { t } = useTranslation()

   useEffect(() => {
      axios.get('http://localhost:3001/users/1')
         .then(res => {
            setData(res.data.transactions)
            setFilter(res.data.transactions)
         })
   }, []);

   const onFilter = (e) => {
      setFilter(data)
      let filtered
      if (e.target.id) {
         filtered = data.filter(item => item.type.name == e.target.id)
         setFilter(filtered)
      } else setFilter(data)
   }

   return (
      <div className="container">
         <div className="history">
            <h1>{t('history')}</h1>
            <div className="history-box">
               <div className="history-box__item">
                  <div>{t('expenses')}</div>
                  <p>9 982 400 {t('sum')}</p>
               </div>
               <div className="history-box__item">
                  <div>{t('cashback')}</div>
                  <p>9 982 400 {t('sum')}</p>
               </div>
            </div>
         </div>

         <div className="transaction">
            <div className="filter-box">
               <button onClick={(e) => onFilter(e)}><BiFilter size={24} /></button>
               <button id="incoming" onClick={(e) => onFilter(e)}>{t('receive')}</button>
               <button id="outgoing" onClick={(e) => onFilter(e)}>{t('spent')}</button>
            </div>

            <div className="mt-8">
               <h3>Сегодня</h3>
               <div className='transaction-box' >

                  {filter?.map((item, idx) => {
                     return <Transaction transaction={item} key={idx} />
                  })}

               </div>
            </div>
         </div>
      </div>
   );
}

export default HistoryPage;