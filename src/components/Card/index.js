import React from 'react'
import './style.css'

const Card = () => {
    return(
        <div className="Card">
            <div className="Imagem">
                <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-5.png" alt="Avatar" />
            </div>
            <div className="Info">
                <strong>Facebook</strong>
                <strong>120</strong><p>Repositórios</p>
            </div>
        </div>
    )
}

export default Card;
