import React, {useState} from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Card from '../../components/Card'

import InfoUsuario from '../../Mock/infoUsuario.json'


const Home = () => {

    const[data, setData] = useState(null)
    const[texto, setTexto] = useState('Inicial...')

    const loadData = (e) =>{
        e.preventDefault();
        setData(InfoUsuario)
    }

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
                <Card infoUsuario={data}/> : ""}                
        </div>
    )
}

export default Home
