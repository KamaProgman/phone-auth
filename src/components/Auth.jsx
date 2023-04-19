import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'

const Auth = () => {
   const [data, setData] = useState([]);
   const { register, handleSubmit, formState: { errors }, reset } = useForm()
   const { t } = useTranslation()

   useEffect(() => {
      axios.get('http://localhost:3001/users')
         .then(res => setData(res.data))
   }, []);

   const onSubmit = (elem) => {
      let found = data.find(item => item.phoneNumber == elem.phoneNumber)
      if (typeof found != 'object') {
         axios.post('http://localhost:3001/users', elem)
            .then(res => {
               if (res.status == 200 || res.status == 201) reset();
            })
      }
   }

   return (
      <div className="container">
         <div>
            <Link to='/' className='mb-4 absolute top-0 left-0'>
               <HiArrowNarrowLeft size={30} color='gray' />
            </Link>
         </div>
         <div className="box">
            <form onSubmit={handleSubmit(onSubmit)}>
               <h2 className="title">{t('enterNumber')}</h2>
               <div className="mb-6">
                  <p className="text">{t('isNeeded')}</p>
               </div>

               <div>
                  <div className="mt-10 flex bg-[#ebecf0] rounded-2xl overflow-hidden relative">
                     <div className="flex items-center px-4 gap-2 cursor-pointer">
                        <label htmlFor="phoneField">
                           <img className="h-7 w-9 rounded-md" src="https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Uzbekistan.png" alt="flag" />
                        </label>
                     </div>
                     <input
                        type="number"
                        placeholder='998 (00) 000-00-00'
                        id='phoneField'
                        {...register('phoneNumber', {
                           required: t('enterNumber'),
                           pattern: {
                              value: /^998[7-9][012345789][0-9]{7}$/,
                              message: t('correct')
                           }
                        })}
                     />
                  </div>
                  <p className='m-1 ml-2 text-xs font-semibold text-red-600'>
                     {errors?.phoneNumber?.message}
                  </p>
               </div>

               <div className='bottom'>
                  <button className="continue-button">{t('continue')}</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Auth;