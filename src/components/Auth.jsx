import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'

let transactions = {
   "transactions": [
      {
         "id": 1,
         "name": "Alex Smith",
         "type": {
            "name": "outgoing",
            "descr": "Исходящий перевод"
         },
         "card": "+4928",
         "sum": 500000,
         "img": "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/arrow-up-circle-1.png",
         "date": "01.05.2023",
         "time": "10:46:22"
      },
      {
         "id": 2,
         "name": "Ipak Yuli Bank",
         "type": {
            "name": "incoming",
            "descr": "Мониторинг карты"
         },
         "card": "+4813",
         "sum": 1500000,
         "img": "https://uzoplata.com/wp-content/uploads/2020/10/humocard1.png",
         "date": "22.04.2023",
         "time": "16:21:02"
      },
      {
         "id": 3,
         "name": "Lorem",
         "type": {
            "name": "outgoing",
            "descr": "Исходящий перевод"
         },
         "card": "+4928",
         "sum": 2700000,
         "img": "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/arrow-up-circle-1.png",
         "date": "22.03.2023",
         "time": "12:39:13"
      },
      {
         "id": 4,
         "name": "Agro Bank",
         "type": {
            "name": "incoming",
            "descr": "Мониторинг карты"
         },
         "card": "+4813",
         "sum": 1150000,
         "img": "https://uzoplata.com/wp-content/uploads/2020/10/humocard1.png",
         "date": "20.03.2023",
         "time": "20:53:48"
      }
   ]
}

const Auth = ({ isActive, setIsActive }) => {
   const [data, setData] = useState([]);
   const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: transactions })
   const navigate = useNavigate()
   const { t } = useTranslation()

   useEffect(() => {
      axios.get('http://localhost:3001/users')
         .then(res => setData(res.data))
   }, []);

   const onSubmit = (elem) => {
      // let found = data.find(item => item.phoneNumber == elem.phoneNumber)
      // if (typeof found != 'object') {
      let token = Math.random().toString(36).substring('2')
      axios.post('http://localhost:3001/users', { ...elem, token: token, pin: '1234' })
         .then(res => {
            if (res.status == 200 || res.status == 201) {
               window.localStorage.setItem("token", token);

               navigate(`../users/${res.data.id}/transactions`, { state: res.data })
               window.location.reload()
            }
         })
      // }
   }

   return (
      <div className="container pt-6">
         <div>
            <button onClick={() => setIsActive(!isActive)} className='mb-4 mt-6 absolute top-0 left-4'>
               <HiArrowNarrowLeft size={30} color='gray' />
            </button>
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