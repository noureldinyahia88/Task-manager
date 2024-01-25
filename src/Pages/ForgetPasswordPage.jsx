import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const ForgetPasswordPageWrapper = styled.div`
  background-color: ${theme.blue400};
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background-color: ${theme.white};
    border-radius: 20px;
    width: 934px;
    height: 395px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`;

const FormHeader = styled.div`
    border-bottom: 1px solid #BDBDBD;
`;

const H2 = styled.h2`
  color:${theme.gray800};
  font-size: 49px;
  font-weight: 600;
`;

const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Label = styled.label`
  color: ${theme.gray400};
  font-size: 24px;

`;

const Input = styled.input`
  width: 95%;
  border: none;
  background-color: #E5E7EB;
  color: #111827;
  padding: 15px;
    border-radius: 10px;

    &:focus{
        outline: none;
        border: none;
    }

`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  color: #111827;
  border-bottom:1px solid #111827 ;
  cursor: pointer;
  font-size: 24px;

`;

const BtnWrapper = styled.div`
    display: flex;
    gap: 35px;

`;

const GrayBtn = styled.button`
      width: 200px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E7EB;
    color: #1D4ED8;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
    border: none;
    cursor: pointer;
`;

const BlueBtn = styled.button`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1D4ED8;
  color: #fff;
  border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`;

const ForgetPasswordPage = () => {
  return (
    <ForgetPasswordPageWrapper>
      <Form>
        <FormHeader>
          <H2>Find Your Account</H2>
        </FormHeader>
        <InputWrapper>
          <Label>Please enter your email address to search for your account.</Label>
          <Input />
        </InputWrapper>
        <FormFooter>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Link>Log in with your password</Link>
            </NavLink>
          <BtnWrapper>
            <GrayBtn>Cancel</GrayBtn>
            <BlueBtn>Search</BlueBtn>
          </BtnWrapper>
        </FormFooter>
      </Form>
    </ForgetPasswordPageWrapper>
  );
};

export default ForgetPasswordPage;
