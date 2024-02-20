import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import MangeProjectPagePM from './PM/MangeProjectPagePM'
import PMProjectPageSetting from '../components/PM/PMProjectPageSetting'
import MyAccountPM from './PM/MyAccountPM'

const PMPrivetRoute = () => {
    const hasToken = localStorage.getItem('profileType') === "ROLE_PROJECT_MANAGER"

    return (
        hasToken ? <Outlet /> : <Navigate to="/" />
        
)
}

export default PMPrivetRoute