import { changeLanguage } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';



const languages =[
  {code: "en" ,lang: "English"},
  {code: "fr" ,lang: "French"},
  {code: "hi" ,lang: "Hindi"},
];
const LanguagesSelector = () => {
 const {i18n} =  useTranslation();
 const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng)
}
  return (
    <div className='space-x-3'>
      {languages.map((lng)=>{
        return <button className={lng.code === i18n.language ? 'py-1 px-4 borber text-white rounded text-lg bg-blue-500': ""} key={lng.code} onClick={()=> changeLanguage(lng.code)}>{lng.lang}</button>
      })}
    </div>
  )
}

export default LanguagesSelector;