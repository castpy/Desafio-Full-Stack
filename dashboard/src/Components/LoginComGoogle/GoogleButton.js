import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'

const clientId ='928406916720-tqvljcjn4q1kkbae34gldo93ktdpo0kp.apps.googleusercontent.com'

//ajustando bug de popup fechado - gapi

const GoogleButton = () => {
    useEffect(() => {
        gapi.load("client:auth2", () => {
          gapi.auth2.init({clientId:clientId})
        })
      }, [])
  const responseGoogle = (response) => {
    console.log(response);
        //
        window.location.href = "/home";
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