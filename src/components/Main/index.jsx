import React from 'react'
import './style.css'
import Steper from '../Steper'


function Main() {
    let dataArticle = [
        {id:1, titleArt:'Esquel', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.', imageArt:'esquel.png', urlArt:''},
        {id:2, titleArt:'Corcovado', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.', imageArt:'corcovado.png', urlArt:''},
        {id:3, titleArt:'El Hoyo', textArt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit quas enim sequi asperiores illum saepe quisquam consectetur optio ad alias, corporis, atque, architecto ipsum deserunt facere eos sapiente. Saepe.', imageArt:'elhoyo.png', urlArt:''}
    ]
    return (
        <div className="container mainContainer">
            <div className="row justify-content-center ">
                <div className="col-sm-8 align-self-center mt-5">
                    {/* { dataArticle.map((each, key)=><Article key={key} each={each}/>)} */}
                    <Steper dataArticle={dataArticle}/>
                </div>
            </div>
        </div>
    )
}
export default Main 

