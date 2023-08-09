import React, { useState } from 'react'
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

  return (
    <div className="slide">
        <Article dataArticle={dataArticle} step={step}/>
        <button className='btn btn-primary' onClick={()=> handlerBack()}>Back</button>
        <button className='btn btn-primary' onClick={()=> handlerForward()}>Forward</button>
    </div>
  )
}
export default Steper