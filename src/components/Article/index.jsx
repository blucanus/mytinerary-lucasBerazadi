import React from 'react'
import './style.css'

export default function Article({titleArticle, textArticle}) {
  return (
    <>
        <article>
            <h3>{titleArticle}</h3>
            <p>{textArticle}</p>
        </article>
    </>
  )
}
