import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="mail-endereco">
      <img src={ props.imagem } />
            <div>
                <p>{ props.email }</p>
            </div>
            <p>{props.endereco}</p>
        </div>
    )
}

export default CardPequeno;