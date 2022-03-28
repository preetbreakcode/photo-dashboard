import React from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { loginWithGmail } from '../Firebase'
import GoogleButton from 'react-google-button'

function LoginPage({ setAuth }) {

  const onClickGmailLogin = () => {
    loginWithGmail().then((result) => {

      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("auth", true);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      setAuth({ loggedIn: true })

    })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <ParentContainer>
      {/* Login Form Component */}
      <h2>Photo Hub</h2>
      <TextInputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </TextInputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <h5>Sign in with</h5>
      <BreakLine />
      {/* Alternative Login Options */}
      <GoogleButton
        label='Sign in'
        onClick={onClickGmailLogin}
      />
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 40vw;
  padding:40px;
  border-radius: 15px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
 
  @media only screen and (min-width: 411px) {
    width: 60vw;
    height: auto;
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    height: auto;
  }
  @media only screen and (min-width: 1280px) {
    width: 35vw;
    height: auto;
    
  }
`;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;


const ButtonContainer = styled.div`
  margin: 5px 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BreakLine = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;


export default LoginPage;
