import { useTranslation } from "react-i18next";

const Transaction = ({ transaction }) => {
   const { t } = useTranslation()

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
            <p className='text-lg text-gray-800 font-medium'>{transaction.sum} {t('sum')}</p>
            <div className='text-[13px] text-gray-400 font-semibold'>
               <span>{t('card')} {transaction.card}, </span>
               <span>{transaction.time}</span>
            </div>
         </div>
      </div>
   );
}

export default Transaction;
