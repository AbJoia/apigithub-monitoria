import React from 'react'

const Input = (props) =>{
    return(
        <form>
            <input value={props.valorTexto} onChange={e => props.atualizaTexto(e.target.value)}/>
        </form>
    )
}

export default Input
