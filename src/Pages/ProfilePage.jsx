import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { RiArrowRightSLine } from 'react-icons/ri'
import { IoCallSharp } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai'

const ProfilePage = () => {
   const navigate = useNavigate()
   const { state } = useLocation()
   const { t } = useTranslation()

   return (
      <div className="container">
         <div className='absolute top-0 left-4 flex items-center gap-5'>
            <button
               onClick={() => navigate(-1)}
            >
               <HiArrowNarrowLeft size={30} color='gray' />
            </button>
            <h2 className='text-[28px] text-gray-800 font-bold leading-9'>{t('profile')}</h2>
         </div>

         <h2 className='mt-16 ml-4 text-4xl font-bold'>+{state}</h2>

         <div className="box mt-8">
            <div className="p-4 bg-gray-100 flex justify-between rounded-2xl">
               <div>
                  <h3 className='text-2xl font-bold leading-5'>Анонимный</h3>
                  <p className='mt-1 text-gray-500'>Минимум возможностей</p>
               </div>
               <span className="h-fit bg-gray-700 text-white text-sm mr-2 px-3 py-0.5 rounded-lg">Ваш статус</span>
            </div>

            <p className='max-w-[310px] my-8 font-medium leading-5'>Подтвердите личность, чтобы повысить лимиты по платежам и переводам</p>
            <button className='continue-button'>Подтвердить личность</button>
         </div>

         <div className='mt-10 '>
            <h3 className='ml-5 mb-3 text-2xl font-bold'>Поддержка</h3>
            <div className="box flex flex-col">
               <div className='py-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                     <div className='w-8 h-8 bg-[#464e5b] rounded-full flex items-center justify-center'>
                        <FaTelegramPlane color='white' size={18} />
                     </div>
                     <p className='ml-8 text-xl'>Telegram ассистент</p>
                  </div>
                  <span><RiArrowRightSLine color='#444444' size={24} /></span>
               </div>
               <div className='py-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                     <div className='w-8 h-8 bg-[#464e5b] rounded-full flex items-center justify-center'>
                        <IoCallSharp color='white' size={18} />
                     </div>
                     <p className='ml-8 text-xl'>Позвонить в поддержку</p>
                  </div>
                  <span><RiArrowRightSLine color='#444444' size={24} /></span>
               </div>
               <div className='py-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                     <div className='w-8 h-8 bg-[#464e5b] rounded-full flex items-center justify-center'>
                        <IoMdMail color='white' size={18} />
                     </div>
                     <p className='ml-8 text-xl'>Написать в поддержку</p>
                  </div>
                  <span><RiArrowRightSLine color='#444444' size={24} /></span>
               </div>
               <div className='py-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                     <div className='w-8 h-8 bg-[#464e5b] rounded-full flex items-center justify-center'>
                        <AiTwotoneStar color='white' size={18} />
                     </div>
                     <p className='ml-8 text-xl'>Оценить приложение</p>
                  </div>
                  <span><RiArrowRightSLine color='#444444' size={24} /></span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProfilePage;