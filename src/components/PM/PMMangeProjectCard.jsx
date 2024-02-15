import React, { useState } from 'react'
import styled from 'styled-components'
import manger from '../../img/manger.png'
import { NavLink } from 'react-router-dom';



const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    blue400: '#38BDF8',
    blue700: '#1D4ED8',
    gray500: '#6B7280',
    gray800: '#1F2937',
    inputColor: '#9CA3AF',
    black: '#000'
};

const ButtonSetting = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.fontColor};
    font-weight: 600;
    font-size: 20px;
    background-color: #0EA5E9;
    width: 104px;
    height: 40px;
    border-radius: 0 10px 10px 10px;
    padding: 12px;
    display: flex;
    align-items: center;
`

const MangeProjectHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    padding: 10px;
    margin-top:30px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: "Roboto Condensed", sans-serif;
    

    &:hover{
        background-color: ${theme.blue700};
        color: ${theme.white};
        ${ButtonSetting} {
            color: ${theme.white};
        }
    }

`
const HeaderTitle = styled.h3`
    font-weight: blod;
    font-size: 13px;
    color: ${theme.gray700};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const MangeWrapper = styled.div`
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 60px; */
    
`

const PMMangeProjectCard = ({id, title, email, phoneNo, imgSrc, lastNa, onClick}) => {

    const [clikcedEmployee, setClickedEmployee] = useState()

    const handleId = () =>{
        // Save the id into localStorage
        localStorage.setItem('clickedEmployeeId', id);
        onClick(id)
    }

    return (
        <MangeProjectHeader>
        <HeaderTitle>#{id}</HeaderTitle>
        <HeaderTitle>{title}</HeaderTitle>
        {/* <HeaderTitle>{lastNa}</HeaderTitle> */}
        <HeaderTitle><img src={imgSrc} alt="" /> {lastNa}</HeaderTitle>
        <HeaderTitle>{email}</HeaderTitle>
        <HeaderTitle>{phoneNo}</HeaderTitle>
    
        <MangeWrapper>
        <NavLink className="navLink" to="/ProjectPageSetting" style={{ textDecoration: 'none' }}>
            <ButtonSetting onClick={handleId}>Manage</ButtonSetting>
            </NavLink>
        </MangeWrapper>

    </MangeProjectHeader>
    
)
}

export default PMMangeProjectCard