import React from 'react';
import CardRepos from '../CardRepos'

const Cards = (props) => {    
    return (
        <>
            {props.data.map((d, i) => {
                return <CardRepos key={i}  data={d}/>
            })}
        </>
    )    
}

export default Cards;
