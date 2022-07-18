import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import *as yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../store/action/useraction'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const { login } = useSelector(state => state.user)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        login && navigate("/todo")

    }, [login])


    const formik = useFormik({
        initialValues: {
            email: 'ak8835097@gmail.com',
            password: "@altaf7020"
        },
        validationSchema: yup.object({
            email: yup.string().required("plse eneter yor email").email("valid emial"),
            password: yup.string().required("password is required filed")
        }),
        onSubmit: (values, action) => {
            dispatch(signInAction(values))
            // localStorage.getItem("token") && navigate('/todo')



        }
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>

                                    <div>
                                        <label htmlFor="email" className="form-label">First Email</label>
                                        <input
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            type="text"
                                            className={
                                                formik.errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="email"
                                            placeholder="Enter Your Email"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            type="password"
                                            className={formik.errors.password
                                                ? "form-control is-invalid"
                                                : "form-control"}
                                            id="password"
                                            placeholder="Enter Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 mt-3">
                                        Login
                                    </button>

                                    <p className='text-center mt-3 '>
                                        Don't have account?<Link to={'/signup'} >signup</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
