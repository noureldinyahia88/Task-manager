import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivetRoutes = () => {
    const hasToken = localStorage.getItem('token') !== null
    const [name, setName] = useState()
    const [imgeProfile, setImageProifile] = useState()
    const [sub, setSub] = useState()
    const [profileType, setProfileType] = useState([])

    useEffect(() => {
    setName(jwtDecode(localStorage.getItem('token')).name)
    setImageProifile(jwtDecode(localStorage.getItem('token')).image)
    setSub(jwtDecode(localStorage.getItem('token')).sub)
    setProfileType(jwtDecode(localStorage.getItem('token')).role)
    }, [])

    if(profileType[0] === "ROLE_GLOBAL_ADMIN"){

        console.log(true);
    } 
    return (
        hasToken? <Outlet /> : <Navigate to="/" />
)
}

export default PrivetRoutes