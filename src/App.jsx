
import  {useTranslation}  from 'react-i18next'
import './App.css'
import LanguagesSelector from './Language-selector'

function App() {
 const { t} =  useTranslation()

  return (
    <>
     <div>  
      <LanguagesSelector/>
       <h1>{t("greeting")}</h1>
     </div>
    </>
  )
}

export default App
