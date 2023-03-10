import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script'

//Id de acesso a API do google login
const clientId ='351191209898-vbejq41dev7jue0enrs4ejvt5ur2tnbf.apps.googleusercontent.com'

//ajustando bug de popup fechado - gapi
const GoogleButton = () => {
  const navigate = useNavigate();
  useEffect(() => {
      gapi.load("client:auth2", () => {
        gapi.auth2.init({clientId:clientId})
      })
    }, [])
  //Resposta da API - Dados do usuário em response
  const responseGoogle = (response) => {
    console.log(response);
    //redirecionando o usuário
    navigate("/home")
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login com Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleButton;
