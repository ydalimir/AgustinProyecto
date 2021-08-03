import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import { Container, Grid, Image, Input } from "semantic-ui-react";

export default function Auth(props) {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Inicia sesión");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Crear nuevo usuario");
    setShowLogin(false);
  };

  return showLogin ? (

   
    <a>
    <Image src="https://ydalimir-ecommerce.s3.us-east-2.amazonaws.com/oxo_bd829ab96a.png" alt="the ordynari" />
    <LoginForm
       showRegisterForm={showRegisterForm}
       onCloseModal={onCloseModal}
     />

  </a>
       
   
    
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
