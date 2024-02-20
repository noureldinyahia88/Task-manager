import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import logo from '../../img/logo.png'
import adminImg from '../../img/adminpng.png'
import { NavLink } from 'react-router-dom';
import { GrGroup } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';

const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E',
    gray800: '#1F2937'
};

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto Condensed", sans-serif;
    
`

const LogoWrapper = styled.div``

const Logo = styled.img`
    
`
const AdminInfoWrapper = styled.div`
    margin-top: 30px;
`

const AdminImg = styled.img``
const Header3 = styled.h3`
    font-size: 13px;
    font-weight: bold;
    color: ${theme.gray800};
    text-align: center;
    padding: 0;
    margin: 0;
    font-family: "Roboto Condensed", sans-serif;
`
const BtnsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 35px;
    padding-right: 35px;
    height: 65%;
    gap: 40px;

`
const Button = styled(NavLink)`
    background-color: ${theme.sky50};
    width: 200px;
    height: 50px;
    border-radius:10px;
    color: ${theme.fontColor};
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding-left: 15px;
    
    &.active{
    background-color: ${theme.skyColor};
    color: ${theme.white};
    }

    &:hover{
        background-color: ${theme.skyColor};
        color: ${theme.white};
        padding-left: 20px;
    }
`

const BtnsWrapperChiled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`
const ButtonLogout = styled.button`
    width: 86px;
    height: 40px;
    border-radius: 100px;
    background-color: ${theme.sky50};
    color: ${theme.fontColor};
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`

const SidebarEmlpoyee = () => {
    const logedout = () => {
        localStorage.removeItem('token')
    }

    const [name, setName] = useState()
    const [imgeProfile, setImageProifile] = useState()

    useEffect(() => {
    setName(jwtDecode(localStorage.getItem('token')).name)
    setImageProifile(jwtDecode(localStorage.getItem('token')).image)
    }, [name,imgeProfile])

    return (
    <SidebarWrapper>
        <LogoWrapper>
            <Logo src={logo} alt='' />
        </LogoWrapper>
        <AdminInfoWrapper>
        <AdminImg src={adminImg} alt='' />
        <Header3>{name}</Header3>
        </AdminInfoWrapper>

    <BtnsWrapper>
        <BtnsWrapperChiled>
            <Button className="navLink" to="/manageTaskEmplyee" style={{ textDecoration: 'none' }}>
                <GrGroup style={{fontSize:"16px"}} />Manage  Tasks
            </Button>

            <Button className="navLink" to="/myAccountEmployee" style={{ textDecoration: 'none' }}>
                <IoPersonSharp style={{fontSize:"20px"}} /> My Account
            </Button>
        </BtnsWrapperChiled>
    
    <NavLink className="navLink" to="/" style={{ textDecoration: 'none' }}>
        <ButtonLogout onClick={logedout}>Log Out</ButtonLogout>
    </NavLink>
    </BtnsWrapper>


    </SidebarWrapper>
)
}

export default SidebarEmlpoyee