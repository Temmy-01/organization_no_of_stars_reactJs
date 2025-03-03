import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../../hooks/axiosInstance';
import { toast } from "react-toastify";

export default function VerifyEmailPage() {
    const verificationData = JSON.parse(localStorage.getItem("verificationData"))
    const [loading, setLoading] = useState(false)

    const appUrl =  process.env.NODE_ENV !== 'production' ? 
                process.env.REACT_APP_DEV_CALL_BACK_URL :
                process.env.REACT_APP_PROD_CALL_BACK_URL


    const callbackUrl = `${appUrl}/auth/email-verified`

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axiosInstance.get(`/user/auth/email/resend-email?callbackUrl=${callbackUrl}&email=${verificationData.user.email}`)
            .then(res => {
                toast.success(res.data.message)
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

                                    <div className="card-body p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Email Verification</h5>
                                            <p className="text-muted">Verify your email</p>

                                            <lord-icon src="https://cdn.lordicon.com/rhvddzym.json" trigger="loop" colors="primary:#0ab39c" className="avatar-xl"
                                            style={{height: '7.5rem', width: '7.5rem'}}></lord-icon>
                                        </div>

                                        <div className="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                            Account activation link sent to your email address: 
                                            <b className="text-info"> {verificationData?.user.email}</b>. &nbsp;
                                            Please follow the link inside to continue.
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Didn't get the mail? &nbsp; 
                                        <Link
                                            className="fw-semibold text-primary text-decoration-underline"
                                            onClick={handleSubmit}
                                        > 
                                            {loading ? <div className="spinner-border spinner-border-sm text-danger"></div> : 'Resend'}
                                        </Link> 
                                    </p>
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