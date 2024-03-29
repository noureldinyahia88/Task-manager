import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import grid from '../../img/grid.svg'


import logo from '../../img/logo.png'
import adminImg from '../../img/adminpng.png'

import { FaUserGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'





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



const AdminSidebar = () => {

    const [name, setName] = useState()
    const [imgeProfile, setImageProifile] = useState()
    

    useEffect(() => {
    setName(jwtDecode(localStorage.getItem('token')).name)
    setImageProifile(jwtDecode(localStorage.getItem('token')).image)
    
    }, [name,imgeProfile])

    const logedout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('clickedEmployeeId')
        localStorage.removeItem('profileType')
        localStorage.removeItem('sub')
    }
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
    
    <Button className="navLink" to="/ManageProjects" style={{ textDecoration: 'none' }}>
        
            <LuLayoutGrid style={{fontSize:"16px"}} /> Manage Projects
            
    </Button>

    <Button className="navLink" to="/manageAdmin" style={{ textDecoration: 'none' }}>
        
            <FaUserGroup style={{fontSize:"16px"}} /> Manage Admins
            
    </Button>

    <Button className="navLink" to="/manageEmployees" style={{ textDecoration: 'none' }}>
        
            <MdGroups style={{fontSize:"16px"}} /> Manage Employees
            
    </Button>

    <Button className="navLink" to="/managePMS" style={{ textDecoration: 'none' }}>
        
            <FaFolder style={{fontSize:"16px"}} /> Manage PMs
        
    </Button>

    <Button className="navLink" to="/myAccountAdmin" style={{ textDecoration: 'none' }}>
        
            <IoPersonSharp style={{fontSize:"20px"}} /> My Account
        
    </Button>

    
        <Button onClick={logedout} to="/" style={{ textDecoration: 'none' , backgroundColor:'#F0F9FF', color:'#0D1C2E'}}>
            <RiLogoutBoxLine style={{fontSize:"20px"}} /> Log Out
            
    </Button>
    </BtnsWrapper>


    </SidebarWrapper>
)
}

export default AdminSidebar