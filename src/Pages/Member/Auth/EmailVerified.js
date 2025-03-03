import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import axiosInstance from '../../../hooks/axiosInstance';

export default function EmailVerifiedPage() {
    const [loading, setLoading] = useState(false)

    const [queryParameters] = useSearchParams()
    const expires = queryParameters.get('expires')
    const hash = queryParameters.get('hash')
    const id = queryParameters.get('id')
    const signature = queryParameters.get('signature')

    const verifyEmail = () => {
        setLoading(true)
        axiosInstance.get(`/user/auth/email/verify?expires=${expires}&hash=${hash}&id=${id}&signature=${signature}`)
            .then(res => {
                setLoading(false)
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }

    useEffect(() => {
        verifyEmail()
    }, [queryParameters])

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
                                            <img src="/assets/innermember-white.png" alt="" height="50" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="card mt-4">
                                    <div className="card-body p-4 text-center">
                                        <div className="avatar-lg mx-auto mt-2">
                                            <div className="avatar-title bg-light text-success display-3 rounded-circle">
                                                <i className="ri-checkbox-circle-fill"></i>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <h4>Account Activated !</h4>
                                            <p className="text-muted mx-4">
                                                Thank you, your email has been verified. Your account is now active.
                                                Please, use the button below to login to your account
                                            </p>
                                            <div className="mt-4">
                                                <NavLink to="/auth/login" className="btn btn-success w-100">
                                                    Go to Login
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}

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