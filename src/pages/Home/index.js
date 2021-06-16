import React, {useState} from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Card from '../../components/Card'


const Home = () => {

    const[texto, setTexto] = useState('Inicial...')

    return(
        <div>
            <Header>
                Digite seu usuário Github
            </Header>                       
            <Input valorTexto={texto} atualizaTexto={setTexto}/>
            <Card/>
        </div>
    )
}

export default Home
