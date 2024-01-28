import React from 'react'
import { Navigate, Outlet, Route } from 'react-router'
// import ManageProjects from './Admin/ManageProjects'
// import ManageAdmins from './Admin/ManageAdmins'
// import ManageEmployees from './Admin/ManageEmployees'
// import ManagePMs from './Admin/ManagePMs'
// import MyAccountAdmin from './Admin/MyAccountAdmin'

const PrivetRoutes = () => {
    const hasToken = localStorage.getItem('token') !== null
    return (
        hasToken? <Outlet /> : <Navigate to="/" />
)
}

export default PrivetRoutes