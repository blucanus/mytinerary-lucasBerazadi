import React from 'react'
import './style.css'

function Article({dataArticle, step}) {

  return (
    <>
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={dataArticle[step].imageArt} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{dataArticle[step].titleArt}</h5>
              <p className="card-text">{dataArticle[step].textArt}</p>
              <button className="btn btn-primary">Know our Destinies</button>
            </div>
          </div>
        </div>
      </article>

    </>
  )
}
export default Article