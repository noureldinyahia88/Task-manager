import React from 'react'
import styled from 'styled-components'

import grid from '../../img/grid.svg'
import peopleFill from '../../img/people-fill.svg'
import people from '../../img/🦆 icon _people_.svg'
import folder from '../../img/folder-fill.svg'
import personfill from '../../img/person-fill.svg'
import logout from '../../img/Log Out.svg'


const theme = {
    skyColor:'#7DD3FC',
    white: '#F9FAFB',
    sky50: '#F0F9FF',
    fontColor: '#0D1C2E'
};

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
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
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
    }
`
const AdminSidebar = () => {
return (
    <SidebarWrapper>
        <Button className='active'><img src={grid} alt='' /> Manage Projects</Button>
        <Button><img src={peopleFill} alt="" /> Manage Admins</Button>
        <Button><img src={people} alt="" /> Manage Employees</Button>
        <Button><img src={folder} alt="" /> Manage PMs</Button>
        <Button><img src={personfill} alt="" /> My Account</Button>
        <Button><img src={logout} alt="" /> Log Out</Button>
    </SidebarWrapper>
)
}

export default AdminSidebar