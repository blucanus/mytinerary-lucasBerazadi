import React from 'react'

import { useParams } from 'react-router-dom'

function Cities() {

  let {id} = useParams()

  return (
    <div>{/* {id} */} Cities</div>
  )
}
export default Cities