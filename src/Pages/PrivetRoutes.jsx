import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivetRoutes = () => {
    const hasToken = localStorage.getItem('token') !== null
    return (
        hasToken? <Outlet /> : <Navigate to="/" />
)
}

export default PrivetRoutes