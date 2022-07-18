import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { lOgoutAction } from '../store/action/useraction'

export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.user)




    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Task Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link " to={"/"}>Home</Link>
                            {
                                login
                                    ? <a className="nav-link" onClick={(e) => {
                                        dispatch(lOgoutAction())
                                        navigate('/login')
                                    }
                                    } > Logout
                                    </a>

                                    : <>
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                        <Link className="nav-link" to={"/signup"}>signUp</Link>

                                    </>
                            }
                            <Link className="nav-link" to={"/todo"}>todo</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
