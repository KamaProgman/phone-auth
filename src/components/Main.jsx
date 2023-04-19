import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

let lngs = {
   ru: { nativeName: 'Русский', img: 'https://cdn4.iconfinder.com/data/icons/world-flags-rounded/900/russia_russian-soviet_union_national_country_flag-512.png' },
   en: { nativeName: 'English', img: 'https://cdn4.iconfinder.com/data/icons/world-flags-rounded/900/united_states_usa_america_american_flag_country-256.png' }
}

const Main = () => {
   const navigate = useNavigate()
   const { t, i18n } = useTranslation()

   const goToAuth = () => {
      navigate({ pathname: '/authorization' })
   }

   return (
      <div className="container">
         <div className="box">
            <h1 className="title">{t('welcome')}</h1>
            <div className="mb-6">
               <p className="text">Выберите язык приложения</p>
               <p className="text-base font-medium text-gray-400">Choose language</p>
            </div>
            <div className="flex gap-4">
               {Object.keys(lngs).map(lng => {
                  return <button
                     key={lng}
                     className='language-button '
                     onClick={(e) => {
                        i18n.changeLanguage(lng)
                     }}
                     disabled={i18n.resolvedLanguage == lng}>
                     <img src={lngs[lng].img} className="w-9 rounded-md" alt="flag" />
                     {lngs[lng].nativeName}
                  </button>
               })}
            </div>
         </div>
         <div className="bottom">
            <button className="continue-button"
               onClick={goToAuth}>{t('continue')}</button>
            <p className="mt-4 px-3 text-gray-500 leading-5 text-center">{t('accepting')}</p>
         </div>
      </div>
   );
}

export default Main;