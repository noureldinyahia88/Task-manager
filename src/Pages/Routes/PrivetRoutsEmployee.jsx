
import React from 'react'
import { Navigate, Outlet } from 'react-router'
import ManageTaskEmplyee from '../Emplyee/ManageTaskEmplyee'

const PrivetRoutsEmployee = () => {
    const hasToken = localStorage.getItem('profileType') === "ROLE_EMPLOYEE"
    if(localStorage.getItem('profileType') === "ROLE_EMPLOYEE"){
        console.log("yes");
    }
    return (
        hasToken ? <Outlet /> : <Navigate to="/" />
)
}

export default PrivetRoutsEmployee