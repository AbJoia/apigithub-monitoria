import React, { useState, useEffect} from 'react'
import Header from '../../components/Header';
import InputPesquisa from '../../components/InputPesquisa'
import Cards from '../../components/Cards'

import infoRepos from '../../Mock/infoRepos.json'

import './style.css'

const Repositorios = () =>{

    const [data, setData] = useState([])
    const [texto, setTexto] = useState('')    

    useEffect(() =>{
        setData(infoRepos)
    }, [])
    
    return(
        <div>
            <Header>
                Repositórios
            </Header>
            <InputPesquisa texto={texto} setTexto={setTexto}/>
            <div className="CardArea">
                                  
                <Cards data={data} />            
                              
            </div>
        </div>
    )
}

export default Repositorios;
