import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

import api from '../../services/axios'

const Home = () => {

    const[data, setData] = useState(null)
    const[texto, setTexto] = useState('')
    const[error, setError] = useState('')

    const loadData = async (e) =>{
        e.preventDefault();
        setData(null)
        api.get(`users/${texto}`)
           .then(response => setData(response.data))
           .catch( _ => 
                setError("Ops... Algo deu errado! Tente novamente!"))
    }

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        const Notifica = () => {
            if(Notification.permission === 'granted'){
                new Notification('Usuário Github encontrado! 🔥🔥🔥', {
                    body: `${data.name} possui ${data.public_repos} Repositórios!`
                })
            }
        }

        if(data) Notifica();
    }, [data])



    useEffect(() => {
       setError('') 
    }, [data])

    return(
        <div>
            <Header>
                Digite seu usuário Github
            </Header>                       
            <Input
                valorTexto={texto}
                atualizaTexto={setTexto}
                loadData={loadData}
            />
            {data !== null ?
                <Link to={`/repos/${data.login}`}> 
                    <Card infoUsuario={data}/> 
                </Link>
            : ""}

            <h3>{error}</h3>
        </div>
    )
}

export default Home
