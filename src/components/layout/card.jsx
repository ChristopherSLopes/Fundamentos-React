import React from 'react'
import './card.css'

export default props =>
    <div className="Card">
        <div className="Footer">
            {props.titulo}
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div >

//É um componente que modela os cards