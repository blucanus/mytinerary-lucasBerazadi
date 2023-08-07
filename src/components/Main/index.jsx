import React from 'react'
import Article from '../Article'
import './style.css'


function Main() {
    let dataArticle = [
        {titleArt:'Titulo 1', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.'},
        {titleArt:'Titulo 2', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.'},
        {titleArt:'Titulo 3', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.'}
    ]
  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    { dataArticle.map((each, key)=><Article key={key} title={each.titleArt} text={each.textArt}/>)}
                </div>
            </div>
        </div>
    )
}
export default Main 

