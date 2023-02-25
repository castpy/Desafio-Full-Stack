import * as C from './styles'
import React, { useState, useEffect } from 'react'
import useAuth from '../../hook/userAuth'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from '../../Components/LoginComGoogle/GoogleButton'

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  
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
        <GoogleButton/>
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