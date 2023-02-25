import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Importando as páginas
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
//Importando Hook
import useAuth from '../hook/userAuth'


//Configurando condições de rota
//Recebendo o item Home se "signed" for True
const Private = ({ Item }) => {
    const { signed } = useAuth()
    return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<Private Item={Home} />} />
                    <Route path='/' element={<Signin />} />
                    <Route exact path='/Signup' element={<Signup />} />
                    <Route path='*' element={<Signup />} />
                </Routes>
            </Fragment>            
        </BrowserRouter>
    );
}

export default RoutesApp