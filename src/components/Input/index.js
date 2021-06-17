import React from 'react'

const Input = (props) =>{
    
    return(
        <form onSubmit={props.loadData}>
            <input value={props.valorTexto} onChange={e => props.atualizaTexto(e.target.value)}/>
        </form>
    )
}

export default Input
