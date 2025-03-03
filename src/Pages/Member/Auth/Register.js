import { useState } from 'react';
import { Link } from 'react-router-dom';
import MemberRegister from '../../../components/Register/Member';
import AssociationRegister from '../../../components/Register/Association';

export default function RegisterPage() {
    const [currentTab, setCurrentTab] = useState('member')

    const setTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <>
            <div className="auth-page-wrapper pt-5">
                {/* <!-- auth page bg --> */}
                <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                    <div className="bg-overlay"></div>
                    <img src="/assets/images/JF-Inspired.png" className="img-fluid" style={{width:"200px"}} alt="" />

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
                                            <img src="/assets/justfood.png" alt="" height="70" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row justify-content-center" style={{marginTop:"10px"}}>
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="card mt-4">

                                    <div className="card-body p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                            <p className="text-muted">Get your free Justfood account now</p>
                                        </div>
                                        <ul className="nav nav-pills nav-justified mb-3" role="tablist">
                                            <li className="nav-item waves-effect waves-light" onClick={() => setTab('member')}>
                                                <a className="nav-link active" data-bs-toggle="tab" href="#pill-justified-home-1" role="tab">
                                                    Admin
                                                </a>
                                            </li>
                                            {/* <li className="nav-item waves-effect waves-light" onClick={() => setTab('association')}>
                                                <a className="nav-link" data-bs-toggle="tab" href="#pill-justified-profile-1" role="tab">
                                                    Association
                                                </a>
                                            </li> */}
                                        </ul>

                                        {/* <!-- Tab panes --> */}
                                        <div className="tab-content text-muted">
                                            <div className="tab-pane active" id="pill-justified-home-1" role="tabpanel">
                                                <MemberRegister />
                                            </div>
                                            
                                            <div className="tab-pane" id="pill-justified-profile-1" role="tabpanel">
                                                <AssociationRegister />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link 
                                        to={currentTab == 'member' ? '/auth/login' : '/auth/association/login'} 
                                        className="fw-semibold text-primary text-decoration-underline"
                                        > Sign In </Link> 
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