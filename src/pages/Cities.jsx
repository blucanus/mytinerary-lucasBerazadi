import React from 'react'

import { useParams } from 'react-router-dom'

function Cities() {

  let {id} = useParams()

  return (
    <>
      <div>{/* {id} */} Cities</div>
      <div className="card mt-5">
        <h2 className="p-5">Hola Probando</h2>
      </div>
    </>
    
  )
}
export default Cities