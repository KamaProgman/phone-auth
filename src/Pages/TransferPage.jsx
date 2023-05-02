
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { RiArrowRightSLine } from 'react-icons/ri'

const TransferPage = () => {
   const [isDisabled, setIsDisabled] = useState(true);
   const { t } = useTranslation()
   const navigate = useNavigate()

   const onTest = (data) => {
      if (+data >= 1000 && +data <= 10000000) setIsDisabled(false)
      else setIsDisabled(true)
   }

   return (
      <div className="container">
         <div className='absolute top-0 left-4 flex items-center gap-5'>
            <button
               onClick={() => navigate(-1)}
            >
               <HiArrowNarrowLeft size={30} color='gray' />
            </button>
            <h2 className='text-[28px] text-gray-800 font-bold leading-9'>{t('transfer')}</h2>
         </div>
         <div className="box">
            <div>
               <div>
                  <h3 className='text-lg font-semibold'>{t('from')}</h3>
                  <div className='mt-3 flex items-center justify-between'>
                     <div className='flex items-center gap-3'>
                        <div className="w-[76px] h-[52px] p-1.5 bg-[#86aaca] rounded-xl flex flex-col">
                           <p className='text-xs text-white tracking-wider'>6114</p>
                           <img className='w-8 mt-0.5' src="https://kapital24.uz/upload/media/icons/cards/system-humo_w.png" alt="card-logo" />
                        </div>
                        <div>
                           <p className='text-lg text-gray-500 font-medium capitalize'>
                              Ipoteka Humo <span>• 6114</span>
                           </p>
                           <p className='text-xl text-gray-300 font-bold'>
                              <span className='text-gray-950'>0</span> {t('sum')}
                           </p>
                        </div>
                     </div>
                     <span><RiArrowRightSLine color='#444444' size={24} /></span>
                  </div>
               </div>
               <div className="divider my-3 h-0.5 w-full bg-gray-100"></div>
               <div>
                  <h3 className='text-lg font-semibold'>{t('to')}</h3>
                  <div className='mt-3 flex items-center justify-between'>

                     <div className='flex items-center gap-3'>
                        <div className="w-[76px] h-[52px] p-2 flex items-center justify-center  bg-gray-100 rounded-xl">
                           <img src="https://kapital24.uz/upload/media/icons/cards/system-humo_c.png" alt="card-logo" />
                        </div>
                        <div>
                           <p className='text-lg text-gray-500 font-medium capitalize'>
                              Alex Smith <span>• 6114</span>
                           </p>
                           <p className='text-gray-500 font-bold'>
                              <span className='text-xl text-gray-950'>9860 01** **** 9847</span>
                           </p>
                        </div>
                     </div>
                     <span><RiArrowRightSLine color='#444444' size={24} /></span>
                  </div>
               </div>
            </div>

            <div className="bottom">
               <form>
                  <div className='mb-8'>
                     <p className=' text-xl font-semibold'>{t('yourTransfer')}</p>
                     <input
                        type="number"
                        className=' '
                        placeholder='1 000 - 10 000 00'
                        onChange={(e) => onTest(e.target.value)} />
                     <p className='mt-2 text-lg font-semibold text-gray-400'>{t('commission')} 0.0%</p>
                  </div>
                  <button disabled={isDisabled} className='continue-button disabled:opacity-40'>{t('continue')}</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default TransferPage;