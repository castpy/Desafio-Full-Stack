import * as C from './styles'
import React, { useState, useEffect } from 'react'
import useAuth from '../../hook/userAuth'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import GoogleLogin from 'react-google-login'
import { Link, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script'

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  
  //ajustando bug de popup fechado - gapi
  const clientId ='917773234636-gjsvdarhan48547bvbm59nudfnbni5on.apps.googleusercontent.com'
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({clientId:clientId})
    })
  }, [])
  const responseGoogle = (response) => {
    console.log(response)
      
  }

  const handleLogin = () => {
    if (!email | !senha){
      setError("Preencha todos os campos!")
      return
    }

    const res = signin (email, senha)
    if (res){
      setError(res)
      return
    }

    navigate("/home")
  }

  return (
    <C.Container>
      <C.Label>Login 🌐</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input 
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <GoogleLogin 
          clientId={clientId}
          buttonText='Continuar com Google' 
          onSuccess={responseGoogle} 
          onFailure={responseGoogle}
        />
        <C.LabelSignup>
          Não tem conta?
          <C.Strong>
            <Link to="/singup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signin