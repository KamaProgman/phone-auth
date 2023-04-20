import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
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
         "time": "12:51",
         "sum": "-500 000",
         "img": "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/arrow-up-circle-1.png"
      },
      {
         "id": 2,
         "name": "Ipak Yuli Bank",
         "type": {
            "name": "incoming",
            "descr": "Мониторинг карты"
         },
         "card": "+4813",
         "time": "09:23",
         "sum": "1 500 000",
         "img": "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/304191564_497104809088726_8920306617648384794_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=61m_AI0Xfw0AX9EoAWg&_nc_ht=scontent.ftas2-1.fna&oh=00_AfCmvHGDA6wdpX4ajvyqunfMvF9i6-YNkwOS80mjTXvC0g&oe=6446069A"
      },
      {
         "id": 3,
         "name": "Eminem",
         "type": {
            "name": "outgoing",
            "descr": "Исходящий перевод"
         },
         "card": "+4928",
         "time": "12:51",
         "sum": "-2 700 000",
         "img": "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/arrow-up-circle-1.png"
      },
      {
         "id": 4,
         "name": "Agro Bank",
         "type": {
            "name": "incoming",
            "descr": "Мониторинг карты"
         },
         "card": "+4813",
         "time": "09:23",
         "sum": "1 150 000",
         "img": "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/304191564_497104809088726_8920306617648384794_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=61m_AI0Xfw0AX9EoAWg&_nc_ht=scontent.ftas2-1.fna&oh=00_AfCmvHGDA6wdpX4ajvyqunfMvF9i6-YNkwOS80mjTXvC0g&oe=6446069A"
      }
   ]
}

const Auth = () => {
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
      axios.post('http://localhost:3001/users', elem)
         .then(res => {
            if (res.status == 200 || res.status == 201) {
               console.log(res.data);
               reset()
               navigate({ pathname: `../users/${res.data.id}/transactions` })
            }
         })
      // }
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