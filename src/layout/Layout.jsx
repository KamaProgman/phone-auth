import { useEffect, useState } from "react";
import pinContext from "../contexts/pinContext";

import Pin from "../pages/PinPage";
import AuthPage from "../pages/AuthPage";

const Layout = ({ children }) => {
   const [token, setToken] = useState('');
   const [pinBool, setPinBool] = useState(false);

   useEffect(() => {
      let gotToken = localStorage.getItem('token')
      setToken(gotToken)
   }, [token]);

   if (!token) return <AuthPage />
   if (!pinBool && localStorage.pinBool != 'true') {
      return (
         <pinContext.Provider value={{ pinBool, setPinBool }}>
            <Pin />
         </pinContext.Provider>
      )
   }

   return (
      <div>
         <div className="pt-6">
            {children}
         </div>
      </div>
   );
}

export default Layout;