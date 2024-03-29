import React, { useState } from 'react';
import styled from 'styled-components';
import loginimg from '../img/Office workplace.png'
import { useMutation, useQuery } from '@tanstack/react-query';
import { Login, fetchEvent, queryClient } from '../components/Uitily/http/http.js'
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { jwtDecode } from 'jwt-decode'
import { IoInformationCircleOutline } from "react-icons/io5";

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
position: relative;
  
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
  color: #111827;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;


  &:focus{
    outline: none;
  }
  &.error{
    border: 1px solid #EF4444;
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

    &.error{
      background-color: #D1D5DB;
      cursor: not-allowed
    }
`
const ErorrFrpm = styled.span`
  color: #EF4444;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3px;
  position: absolute;
    right: 2%;
    top: 58%;
`

// Login Page component
const LoginPage = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  // login
  const [profileType, setProfileType] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      // to refetch the data
      queryClient.invalidateQueries({ queryKey: ['data'] });
      console.log("success");
      console.log(data);
  
      const decodedToken = jwtDecode(data);
  
      setProfileType(decodedToken.role[0]);
      localStorage.setItem('token', data);
      localStorage.setItem('profileType', decodedToken.role[0]);
  
      if (decodedToken.role[0] === "ROLE_GLOBAL_ADMIN") {
        navigate('/manageProjects');
      } else if (decodedToken.role[0] === "ROLE_PROJECT_MANAGER") {
        navigate('/manageProjectsPM');
      } else if (decodedToken.role[0] === "ROLE_EMPLOYEE") {
        navigate('/manageTaskEmplyee');
      }
  
      console.log(decodedToken.role[0]);
    },
  });

async function handleSubmitLogin(formData){
mutate({
  email: formData.email,
  password: formData.password,
})

}

// Function to remove an item from local storage after a specified time
const removeItemAfterDelay = (key, delay) => {
  setTimeout(() => {
    localStorage.removeItem(key);
  }, delay);
};

// Set a timer for each item to be removed after 24 hours (in milliseconds)
const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Example usage
removeItemAfterDelay('token', twentyFourHoursInMilliseconds);
removeItemAfterDelay('clickedEmployeeId', twentyFourHoursInMilliseconds);
removeItemAfterDelay('profileType', twentyFourHoursInMilliseconds);
removeItemAfterDelay('sub', twentyFourHoursInMilliseconds);


    return (
    <LoginPagestyle>
        {/* <Container> */}
        <LoginPageWrapper>
      <LoginWrapperImage>
        <LoginImg src={loginimg} alt='' />
      </LoginWrapperImage>
      <LoginWrapper>
        <Form onSubmit={handleSubmit(handleSubmitLogin)}>
          <FormHeading2>Log In</FormHeading2>

          <InputWrapper>
              <Label>E-mail</Label>
              <Input
                {...register("email", {
                  required: "Invalid email",
                })}
                placeholder="Enter Your E-mail"
                name='email'
                id='email'
                className={errors.password ? 'error' : ''}
              />
              {errors.email && <ErorrFrpm>{errors.email.message} <IoInformationCircleOutline /></ErorrFrpm>}
            </InputWrapper>

            <InputWrapper>
              <Label>Password</Label>
              <Input
                {...register("password", {
                  required: "Invalid password",
                })}
                type="password"
                placeholder="Enter Your Password"
                name='password'
                id='password'
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <ErorrFrpm>{errors.password.message}  <IoInformationCircleOutline /></ErorrFrpm>}
            </InputWrapper>

          <WrapperRememberMeAndForgetPassword>
            <WrapperRememberMe>
              <CheckBoxInput type="checkbox" />
              <Label>Remember me</Label>
            </WrapperRememberMe>
            <NavLink className="navLink" to="/forgetpassword" style={{ textDecoration: 'none' }}>
            <LinkForgetYourPass>Forget password</LinkForgetYourPass>
            </NavLink>
          </WrapperRememberMeAndForgetPassword>

          <LongninBtn type="submit" className={errors.password ? 'error' : ''}>Log in</LongninBtn>
        </Form>
      </LoginWrapper>
      </LoginPageWrapper>
      {/* </Container> */}
    </LoginPagestyle>
);
};

export default LoginPage;
