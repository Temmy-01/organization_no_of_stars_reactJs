import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {toast} from "react-toastify"
import axiosInstance from '../../../hooks/axiosInstance';

export default function ForgotPasswordPage() {
    const callbackUrl =  process.env.NODE_ENV !== 'production' ? 
                process.env.REACT_APP_DEV_CALL_BACK_URL :
                process.env.REACT_APP_PROD_CALL_BACK_URL

    const [resetData, setResetdata] = useState({
        email:"",
        callbackUrl:`${callbackUrl}/auth/reset-password`
    })
    const [loading, setLoading] = useState(false)

    const handleChange =(e) =>{
        setResetdata({...resetData, email:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(resetData.email === "") {
            toast.error("Pls enter your email address")
            return
        }
        setLoading(true)
        axiosInstance.post(`/user/auth/password/forgot`, resetData)
                .then(res => {
                    toast.success(res.data.message)
                    localStorage.setItem('resetEmail', resetData.email)
                })
                .catch(err => {
                    console.log(err.response.data);
                    toast.error(err.response.data.message)
                })
                .finally(() => setLoading(false))
    }

    return (
        <>
            <div className="auth-page-wrapper pt-5">
                {/* <!-- auth page bg --> */}
                <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                    <div className="bg-overlay"></div>

                    <div className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>
                </div>

                {/* <!-- auth page content --> */}
                <div className="auth-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a href="index.html" className="d-inline-block auth-logo">
                                            <img src="/assets/ActionAid.png" alt="" height="70" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="card mt-4">

                                    <div className="card-body p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Forgot Password?</h5>
                                            <p className="text-muted">Reset password with Action Aid</p>

                                            <lord-icon src="https://cdn.lordicon.com/rhvddzym.json" trigger="loop" colors="primary:#0ab39c" className="avatar-xl"
                                            style={{height: '7.5rem', width: '7.5rem'}}></lord-icon>
                                        </div>

                                        <div className="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                            Enter your email and instructions will be sent to you!
                                        </div>
                                        <div className="p-2">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label className="form-label">Email</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        placeholder="Enter Email" 
                                                        name='email'
                                                        value={resetData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="text-center mt-4">
                                                    <button className="btn btn-success w-100" type="submit" disabled={loading}>
                                                        {loading ? <div classname="spinner-border spinner-border-sm text-light"></div> : 'Send Reset Link'}
                                                    </button>
                                                </div>
                                            </form>
                                            {/* <!-- end form --> */}
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Wait, I remember my password... <Link to="/auth/login" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                                </div>

                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end auth page content --> */}
            </div>
        </>
    )
}