import React from 'react'
import './style.css'

function Article({title, text}) {
  return (
    <>
        <article>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    </>
  )
}
export default Article