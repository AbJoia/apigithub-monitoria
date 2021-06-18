import React from 'react';
import CardRepos from '../CardRepos'

const Cards = (props) => {    
    return (
        <>
            {props.data.map((d, i) => {
                return(
                    <a key={i} href={d.html_url} target="_blank" rel="noreferrer">
                        <CardRepos data={d}/> 
                    </a>  
                ) 
            })}
        </>
    )    
}

export default Cards;
