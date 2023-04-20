import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
   .use(initReactI18next)
   .use(LanguageDetector)
   .init({
      debug: true,
      fallbackLng: 'ru',
      resources: {
         ru: {
            translation: {
               welcome: 'Добро пожаловать',
               continue: 'Продолжить',
               accepting: 'Нажимая кнопку "Продолжить", я принимаю все условия оферты о предоставленных услуг и даю согласие на обработку персональных данных',
               enterNumber: 'Введите номер телефона',
               isNeeded: 'Номер нужен для SMS-кодов и восстановления доступа',
               correct: 'Введите номер правильно',
               history: 'История',
               expenses: 'Траты за апрель',
               cashback: 'Кэшбэк за апрель',
               sum: 'сум',
               receive: 'Пополнение',
               spent: 'Списание',
               card: 'Карта'
            }
         },
         en: {
            translation: {
               welcome: 'Welcome',
               continue: 'Continue',
               accepting: 'Clicking "Continue", I accept all terms of the offer about provided services and give my permission for proccessing personal datas',
               enterNumber: 'Enter your phone number',
               isNeeded: 'The phone number is needed for SMS-codes and to restore access',
               correct: 'Enter it correctly',
               history: 'History',
               expenses: 'Expenses for april',
               cashback: 'Cashback for april',
               sum: 'sum',
               receive: 'Received',
               spent: 'Spent',
               card: 'Card'
            }
         }
      }
   })