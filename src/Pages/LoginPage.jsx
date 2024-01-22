import React from 'react';
import styled from 'styled-components';
import loginimg from '../img/Office workplace.png'
import { useQuery } from '@tanstack/react-query';
import { fetchEvent } from '../components/Uitily/http/http.js'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    gray50: '#F9FAFB',
    gray400: '#9CA3AF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#1D4ED8',
    blue800: '#1E40AF',
    gray500: '#6B7280',
    gray200: '#E5E7EB',
    gray800: '#1F2937',
    inputColor: '#9CA3AF',
    black: '#000'
};
// Styled-components for styling
const LoginPagestyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.blue400};
    display: grid;
    place-items: center;
    font-family: "Roboto", sans-serif;
`

const LoginPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

`;

const LoginWrapperImage = styled.div`
    width: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const LoginImg = styled.img`
    
`
const LoginWrapper = styled.div`
    width: 50%;
    background-color: ${theme.gray50};
    height: 100vh;
    display: grid;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const FormHeading2 = styled.h2`
font-family: "Roboto Serif", serif;
  font-size: 41px;
  font-weight: 600;
  color: ${theme.gray800};
`;

const InputWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${theme.gray800};
  font-weight: 600;
  color: ${theme.gray800};

`;

const Input = styled.input`
  background-color: ${theme.gray200};
  border: none;
  width: 540px;
  height: 55px;
  padding: 10px;
  border-radius: 15px;
  font-size: 20px;
  color: ${theme.gray400};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:focus{
    outline: none;
  }
`;

const WrapperRememberMeAndForgetPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
    max-width: 540px;
`;

const WrapperRememberMe = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const CheckBoxInput = styled.input`
      width: 22px;
    height: 22px;
    color: #727677;
    cursor: pointer;
`;
const LinkForgetYourPass = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: ${theme.gray800};
    border-bottom: 1px solid ${theme.gray800};
    cursor: pointer;
`
const LongninBtn = styled.button`
    background-color: ${theme.blue800};
    width: 100%;
    max-width: 539px;
    border: none;
    height: 60px;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`


// Login Page component
const LoginPage = () => {

    
    return (
    <LoginPagestyle>
        {/* <Container> */}
        <LoginPageWrapper>
      <LoginWrapperImage>
        <LoginImg src={loginimg} alt='' />
      </LoginWrapperImage>
      <LoginWrapper>
        <Form>
          <FormHeading2>Log In</FormHeading2>

          <InputWrapper>
            <Label>Email</Label>
            <Input placeholder="Enter Your E-mail" />
          </InputWrapper>

          <InputWrapper>
            <Label>Password</Label>
            <Input placeholder="Enter Your Password" />
          </InputWrapper>

          <WrapperRememberMeAndForgetPassword>
            <WrapperRememberMe>
              <CheckBoxInput type="checkbox" />
              <Label>Remember me</Label>
            </WrapperRememberMe>
            <LinkForgetYourPass>Forget password</LinkForgetYourPass>
          </WrapperRememberMeAndForgetPassword>

          <LongninBtn type="submint">Log in</LongninBtn>
        </Form>
      </LoginWrapper>
      </LoginPageWrapper>
      {/* </Container> */}
    </LoginPagestyle>
);
};

export default LoginPage;
