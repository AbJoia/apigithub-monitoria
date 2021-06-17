import React from 'react'
import './style.css'

const Card = (props) => {
    return(
        <div className="Card">
            <div className="Imagem">
                <img src={props.infoUsuario.avatar_url} alt="Avatar" />
            </div>
            <div className="Info">
                <strong>{props.infoUsuario.name}</strong>
                <strong>{props.infoUsuario.public_repos}</strong><p>Repositórios</p>
            </div>
        </div>
    )
}

export default Card;
