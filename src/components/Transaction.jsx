import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Transaction_Item = ({ transaction }) => {
   const { t } = useTranslation()
   const time = transaction.time.split(':')

   // console.log(transaction.date);

   return (
      <div className='transaction-item'>
         <div className='flex items-center'>
            <div className='w-12 h-12 mr-3 bg-gray-200 rounded-full overflow-hidden'>
               <img src={transaction.img} alt="" className='w-full h-full' />
            </div>
            <div>
               <p className='text-lg font-medium uppercase'>{transaction.name}</p>
               <span className='text-[13px] text-gray-400 font-semibold'>{transaction.type.descr}</span>
            </div>
         </div>
         <div>
            <p className='text-lg text-gray-800 font-medium'>
               {transaction.type.name == 'incoming' ? '+' : '-'}
               {transaction.sum} {t('sum')}
            </p>
            <div className='text-[13px] text-gray-400 font-semibold'>
               <span>{t('card')} {transaction.card}, </span>
               <span>{time[0] + ':' + time[1]}</span>
            </div>
         </div>
      </div>
   );
}


const Transactions = ({ data }) => {
   const [dates, setDates] = useState([]);
   const date = new Date().toLocaleDateString()
   const { t } = useTranslation()

   useEffect(() => {
      let dateElems = []
      data.map((item, idx) => {
         dateElems.push({ date: item.date, arr: [...data] })
      })
      setDates(dateElems)
   }, [data]);


   return (
      <div className="mt-8 flex flex-col gap-10">
         {
            dates.map((elem, idx) => {
               return (
                  <div key={idx}>
                     <h3>
                        {
                           elem.date.split('.')[0] == date.split('.')[0]
                              ?
                              t('today')
                              :
                              elem.date.split('.')[0] + '/' + elem.date.split('.')[1]
                        }
                     </h3>
                     <div className='transaction-box' >
                        {
                           elem.arr?.map((item, idx) => {
                              if (item.date == elem.date) {
                                 return (
                                    <Transaction_Item transaction={item} key={idx} />
                                 )
                              }
                           })
                        }
                     </div>
                  </div>
               )

            })
         }
      </div>
   );
}


export default Transactions;
