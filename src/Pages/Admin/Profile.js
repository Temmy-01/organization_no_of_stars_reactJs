export default function AssociationAdminProfilePage() {
    return (
        <>
            <div className="position-relative mx-n4 mt-n4">
                <div className="profile-wid-bg profile-setting-img">
                    <img src="/assets/images/profile-bg.jpg" className="profile-wid-img" alt="" />
                    <div className="overlay-content">
                        <div className="text-end p-3">
                            <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                <input id="profile-foreground-img-file-input" type="file" className="profile-foreground-img-file-input" />
                                <label for="profile-foreground-img-file-input" className="profile-photo-edit btn btn-light">
                                    <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-3">
                    <div className="card mt-n5">
                        <div className="card-body p-4">
                            <div className="text-center">
                                <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                    <img src="/assets/images/svg/crypto-icons/eth.svg" className="rounded-circle avatar-xl img-thumbnail user-profile-image" alt="user-profile-image" />
                                    <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                                        <label for="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                            <span className="avatar-title rounded-circle bg-light text-body">
                                                <i className="ri-camera-fill"></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <h5 className="fs-16 mb-1">Leo CLub</h5>
                                <p className="text-muted mb-0">RC127363838837</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--end card--> */}
                    {/* <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-5">
                                <div className="flex-grow-1">
                                    <h5 className="card-title mb-0">Complete Your Profile</h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><i className="ri-edit-box-line align-bottom me-1"></i> Edit</a>
                                </div>
                            </div>
                            <div className="progress animated-progress custom-progress progress-label">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                    <div className="label">30%</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-grow-1">
                                    <h5 className="card-title mb-0">Association Details</h5>
                                </div>
                                {/* <div className="flex-shrink-0">
                                    <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1"></i> Add</a>
                                </div> */}
                            </div>
                            <div className="mb-3">
                                <label for="associationnameInput" className="form-label">Association Name</label>
                                <input type="text" className="form-control" id="associationnameInput" placeholder="Enter association name" value="Leo Club" />
                            </div>
                            <div className="mb-3">
                                <label for="associationaddressInput" className="form-label">Address</label>
                                <textarea className="form-control" id="associationaddressInput" placeholder="Enter association address"></textarea>
                            </div> 
                            <div className="hstack gap-2 justify-content-end">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                    {/* <!--end card--> */}
                </div>
                {/* <!--end col--> */}
                <div className="col-xxl-9">
                    <div className="card mt-xxl-n5">
                        <div className="card-header">
                            <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab">
                                        <i className="fas fa-home"></i> Personal Details
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab">
                                        <i className="far fa-user"></i> Change Password
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body p-4">
                            <div className="tab-content">
                                <div className="tab-pane active" id="personalDetails" role="tabpanel">
                                    <form action="javascript:void(0);">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label for="firstnameInput" className="form-label">First Name</label>
                                                    <input type="text" className="form-control" id="firstnameInput" placeholder="Enter your firstname" value="Dave" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label for="middlenameInput" className="form-label">Middle Name</label>
                                                    <input type="text" className="form-control" id="middlenameInput" placeholder="Enter your firstname" value="Son" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label for="lastnameInput" className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="lastnameInput" placeholder="Enter your lastname" value="Adame" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label for="phonenumberInput" className="form-label">Phone Number</label>
                                                    <input type="text" className="form-control" id="phonenumberInput" placeholder="Enter your phone number" value="+(1) 987 6543" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label for="emailInput" className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" value="daveadame@velzon.com" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Update</button>
                                                    <button type="button" className="btn btn-soft-success">Cancel</button>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </form>
                                </div>
                                {/* <!--end tab-pane--> */}
                                <div className="tab-pane" id="changePassword" role="tabpanel">
                                    <form action="javascript:void(0);">
                                        <div className="row g-2">
                                            <div className="col-lg-4">
                                                <div>
                                                    <label for="oldpasswordInput" className="form-label">Old Password*</label>
                                                    <input type="password" className="form-control" id="oldpasswordInput" placeholder="Enter current password" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <div>
                                                    <label for="newpasswordInput" className="form-label">New Password*</label>
                                                    <input type="password" className="form-control" id="newpasswordInput" placeholder="Enter new password" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <div>
                                                    <label for="confirmpasswordInput" className="form-label">Confirm Password*</label>
                                                    <input type="password" className="form-control" id="confirmpasswordInput" placeholder="Confirm password" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <a href="javascript:void(0);" className="link-primary text-decoration-underline">Forgot Password ?</a>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-success">Change Password</button>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </form>
                                    <div className="mt-4 mb-3 border-bottom pb-2">
                                        <div className="float-end">
                                            <a href="javascript:void(0);" className="link-primary">All Logout</a>
                                        </div>
                                        <h5 className="card-title">Login History</h5>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                <i className="ri-smartphone-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6>iPhone 12 Pro</h6>
                                            <p className="text-muted mb-0">Los Angeles, United States - March 16 at 2:47PM</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);">Logout</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                <i className="ri-tablet-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6>Apple iPad Pro</h6>
                                            <p className="text-muted mb-0">Washington, United States - November 06 at 10:43AM</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);">Logout</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                <i className="ri-smartphone-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6>Galaxy S21 Ultra 5G</h6>
                                            <p className="text-muted mb-0">Conneticut, United States - June 12 at 3:24PM</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);">Logout</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                <i className="ri-macbook-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6>Dell Inspiron 14</h6>
                                            <p className="text-muted mb-0">Phoenix, United States - July 26 at 8:10AM</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);">Logout</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end tab-pane--> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
        </>
    )
}