import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Temporary = () => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const { state } = useLocation()


   return (
      <div className="container">
         <div className="pl-6 flex items-center gap-5">
            <div
               className="text-2xl text-gray-600 font-semibold cursor-pointer 
                        ease-linear duration-100 active:underline hover:text-[#18a53c]"
               onClick={() => navigate(`../users/${state.id}/transactions`, { state: state })}>
               {t('history')}
            </div>
            <div
               className="text-2xl text-gray-600 font-semibold cursor-pointer 
                        ease-linear duration-100 active:underline hover:text-[#18a53c]"
               onClick={() => navigate(`../money-transfering`)}
            >
               {t('transfer')}
            </div>
         </div>
      </div>
   );
}

export default Temporary;