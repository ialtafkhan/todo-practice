import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected({ element }) {  //all todo in that el ement
    const navigate = useNavigate()
    const isLogin = localStorage.getItem("token")
        ? true
        : false

    useEffect(() => {
        !isLogin && navigate('/login')
        // isLogin
        //     ? navigate('/login')
        //     : navigate('/todo')

    }, [])


    if (!isLogin) {
        return "you are not loggedin"
    }

    return element
}
