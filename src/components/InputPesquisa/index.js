import React from 'react';

const InputPesquisa = (props) => {
    return(
        <input value={props.texto} onChange={e => props.setTexto(e.target.value)}/>
    )
}

export default InputPesquisa;
