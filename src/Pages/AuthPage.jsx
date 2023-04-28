import { useState } from "react";
import Auth from "../components/Auth";
import Language from "../components/Language";

const AuthPage = () => {
   const [isActive, setIsActive] = useState(false);

   return (
      <>
         <div className={isActive ? 'block' : 'hidden'}>
            <Auth isActive={isActive} setIsActive={setIsActive} />
         </div>
         <div className={!isActive ? 'block' : 'hidden'}>
            <Language isActive={isActive} setIsActive={setIsActive} />
         </div>
      </>
   )
}

export default AuthPage;