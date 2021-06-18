import React, { useState, useEffect} from 'react'
import Header from '../../components/Header';
import InputPesquisa from '../../components/InputPesquisa'
import ListarCardsRepo from '../../components/ListarCardsRepos'
import { useParams } from 'react-router-dom'
import api from '../../services/axios'

import './style.css'

const Repositorios = () =>{

    const { login } = useParams()    
    const [data, setData] = useState([])
    const [cardsFiltrados, setCardsFiltrados] = useState([])
    const [texto, setTexto] = useState('') 
    const [error, setError] = useState('')   
    
    useEffect(() =>{
        const loadData = async () => {
            api.get(`users/${login}/repos`)
               .then(response => setData(response.data))
               .catch( _ => 
                setError('Ops... Não foi possível carregar os repositórios!'))
        }
        loadData();
    }, [login])

    useEffect(() => {
        const filtrarCards = (valorBusca) => {
            const filtradosLinguagem = data.filter(d => d.language ?
                (d.language.toLowerCase() === valorBusca.toLowerCase()) === true : null)
            
            const filtradosNome = data.filter(d => 
                d.name.toLowerCase()
                      .includes(valorBusca.toLowerCase()) === true)

            if(filtradosLinguagem.length > 0){
                setCardsFiltrados(filtradosLinguagem)
                return;
            }        
            setCardsFiltrados(filtradosNome)
        }        
        filtrarCards(texto)
    }, [texto, data])
    
    return(
        <div>
            <Header>
                Repositórios
            </Header>
            <InputPesquisa texto={texto} setTexto={setTexto}/>
            <div className="CardArea">
                                  
                {cardsFiltrados.length === 0 ?
                    <ListarCardsRepo data={data} />
                    : 
                    <ListarCardsRepo data={cardsFiltrados} />
                }           
                <h3>{error}</h3>              
            </div>
        </div>
    )
}

export default Repositorios;
