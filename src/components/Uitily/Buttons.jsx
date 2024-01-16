import React from 'react'
import styled from 'styled-components'

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#38BDF8',
    gray500: '#6B7280',
    gray800: '#1F2937',
    inputColor: '#9CA3AF',
    sky100: '#E0F2FE'
};

const Button1 = styled.button`
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    background-color: ${theme.blue700};
    color: ${theme.gray800};
    font-size: 20px;
    font-size: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
`

const Button2 = styled.button`
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 50px;
    background-color: ${theme.sky100};
    color: ${theme.gray800};
    font-size: 20px;
    font-size: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    z-index: 100;
`

const ButtonSky400 = ({btnTitle, onSubmit, confarimationHandle}) => {
return (
    <Button1 onSubmit={onSubmit} onClick={confarimationHandle}>{btnTitle}</Button1>
)
}

const ButtonSky100 = ({btnTitle, handleclickUpdateForm}) => {
    return (
        <Button2 onClick={handleclickUpdateForm}>{btnTitle}</Button2>
    )
    }

export  {ButtonSky400, ButtonSky100}