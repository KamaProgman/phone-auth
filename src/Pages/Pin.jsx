import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import pinContext from "../contexts/pinContext";

const Pin = () => {
   const { pinBool, setPinBool } = useContext(pinContext)
   const [pin, setPin] = useState('');
   const { state } = useLocation()

   useEffect(() => {
      if (pin.includes(state.pin)) {
         setPinBool(true)
         localStorage.setItem('pinBool', true)
      };
   }, [pin]);

   const handleChange = (e) => {
      if (pin.length < 4) {
         setPin(pin + e.target.value)
      }
   }

   return (
      <div className="container ">
         <div className="pin">
            <div>
               <h2 className="text-3xl font-bold mb-10 text-slate-900">Введите PIN-код</h2>
               <div>
                  <p className="text-xl font-medium text-slate-400 text-center">Номер вашего телефона</p>
                  <p className="text-xl font-semibold text-slate-900 text-center">
                     {`+998 ${state.phoneNumber.slice(3, 5)} *** ** ${state.phoneNumber.slice(10, 12)}`}
                  </p>
               </div>
            </div>

            <div className="flex flex-col items-center">
               <form>
                  <div className="dots-box">
                     <input type="text" disabled placeholder="•" value={pin?.slice(0, 1)} />
                     <input type="text" disabled placeholder="•" value={pin?.slice(1, 2)} />
                     <input type="text" disabled placeholder="•" value={pin?.slice(2, 3)} />
                     <input type="text" disabled placeholder="•" value={pin?.slice(3, 4)} />
                  </div>
               </form>

               <div className="number-box">
                  <div className="item active">
                     <input type="button" value='1' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='2' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='3' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='4' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='5' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='6' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='7' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='8' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item active">
                     <input type="button" value='9' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item btn">
                     <a href="#" type="button">Забыли код?</a>
                  </div>
                  <div className="item active">
                     <input type="button" value='0' onClick={(e) => handleChange(e)} />
                  </div>
                  <div className="item btn">
                     <input type="button" value='X' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Pin;