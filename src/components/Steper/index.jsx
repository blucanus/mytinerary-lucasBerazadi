import React, { useEffect, useState } from 'react'
import Article from '../Article'


function Steper({dataArticle}) {
//Creando useState con parámetro
  let [step, setStep] = useState(0)
  let handlerBack = ()=> {
    setStep((step-1 + dataArticle.length) % dataArticle.length) //para que continue cuando termina
  }
  let handlerForward = ()=> {
    setStep((step+1) % dataArticle.length)
  }

/*   useEffect(()=> {
    setInterval(()=> {
        handlerForward()
    }, 5000);
  },[]); */

  return (
    <div className="slide row align-items-center">
      <div className="col-1"><button className='btn' onClick={()=> handlerBack()}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button></div>
      <div className="col-10"><Article dataArticle={dataArticle} step={step}/></div>
      <div className="col-1"><button className='btn' onClick={()=> handlerForward()}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button></div>
    </div>
  )
}
export default Steper