import React from 'react'
import './style.css'
import { Link as AnchorLink } from 'react-router-dom'


function Article({dataArticle, step}) {

  return (
    <>
      <article className="card">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={dataArticle[step].imageArt} className="imageArt img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{dataArticle[step].titleArt}</h5>
              <p className="card-text">{dataArticle[step].textArt}</p>
              <AnchorLink className="btn btn-primary" to="cities">Know our Destinies</AnchorLink>
            </div>
          </div>
        </div>
      </article>

    </>
  )
}
export default Article