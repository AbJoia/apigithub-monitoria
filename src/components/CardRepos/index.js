import React from 'react'
import './style.css'

const CardRepo = (props) => {    
    return(        
        <div className="CardRepo">
            <div>
                <strong>{props.data.name}</strong>
                <p>{props.data.description}</p>
                <p>Linguagem: <strong>{props.data.language}</strong></p>                
            </div>
        </div>
    )
}

export default CardRepo
