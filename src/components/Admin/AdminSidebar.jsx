import React from 'react'
import styled from 'styled-components'

import grid from '../../img/grid.svg'


import logo from '../../img/logo.png'
import adminImg from '../../img/adminpng.png'

import { FaUserGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";




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
    justify-content: center;
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
`
const BtnsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding-left: 35px;
    padding-right: 35px;
    height: 100vh;
    gap: 40px;

`
const Button = styled.button`
    background-color: ${theme.sky50};
    width: 200px;
    height: 50px;
    border-radius:10px;
    color: ${theme.fontColor};
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
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
const AdminSidebar = () => {
return (
    <SidebarWrapper>
        <LogoWrapper>
            <Logo src={logo} alt='' />
        </LogoWrapper>
        <AdminInfoWrapper>
        <AdminImg src={adminImg} alt='' />
        <Header3>Vivian R.  Lloyd</Header3>
        </AdminInfoWrapper>
    <BtnsWrapper>
        <Button className='active'><img src={grid} alt='' /> Manage Projects</Button>
        <Button><FaUserGroup /> Manage Admins</Button>
        <Button><MdGroups /> Manage Employees</Button>
        <Button><FaFolder /> Manage PMs</Button>
        <Button><IoPersonSharp /> My Account</Button>
        <Button><RiLogoutBoxLine /> Log Out</Button>
    </BtnsWrapper>
    </SidebarWrapper>
)
}

export default AdminSidebar