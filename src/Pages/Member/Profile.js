export default function MemberProfilePage() {
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
                                    <img src="/assets/images/users/avatar-1.jpg" className="rounded-circle avatar-xl img-thumbnail user-profile-image" alt="user-profile-image" />
                                    <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                                        <label for="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                            <span className="avatar-title rounded-circle bg-light text-body">
                                                <i className="ri-camera-fill"></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <h5 className="fs-16 mb-1">Anna Adame</h5>
                                <p className="text-muted mb-0">Super Admin</p>
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
                            </div>
                            <div className="progress animated-progress custom-progress progress-label">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                    <div className="label">30%</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-grow-1">
                                    <h5 className="card-title mb-0">Socials</h5>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="avatar-xs d-block flex-shrink-0 me-3">
                                    <span className="avatar-title rounded-circle fs-16 bg-body text-body">
                                        <i className="ri-github-fill"></i>
                                    </span>
                                </div>
                                <input type="email" className="form-control" id="gitUsername" placeholder="Username" value="@daveadame" />
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="avatar-xs d-block flex-shrink-0 me-3">
                                    <span className="avatar-title rounded-circle fs-16 bg-primary">
                                        <i className="ri-global-fill"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" value="www.velzon.com" />
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="avatar-xs d-block flex-shrink-0 me-3">
                                    <span className="avatar-title rounded-circle fs-16 bg-success">
                                        <i className="ri-dribbble-fill"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="dribbleName" placeholder="Username" value="@dave_adame" />
                            </div>
                            <div className="d-flex">
                                <div className="avatar-xs d-block flex-shrink-0 me-3">
                                    <span className="avatar-title rounded-circle fs-16 bg-danger">
                                        <i className="ri-pinterest-fill"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="pinterestName" placeholder="Username" value="Advance Dave" />
                            </div>
                        </div>
                    </div> */}
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
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#experience" role="tab">
                                        <i className="far fa-envelope"></i> Organization Details
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
                                                <div className="mb-3">
                                                    <label for="JoiningdatInput" className="form-label">Joining Date</label>
                                                    <input type="text" className="form-control"  id="JoiningdatInput" data-date-format="d M, Y" data-deafult-date="24 Nov, 2021" placeholder="Select date" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label for="cityInput" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="cityInput" placeholder="City" value="California" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label for="countryInput" className="form-label">Country</label>
                                                    <input type="text" className="form-control" id="countryInput" placeholder="Country" value="United States" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label for="zipcodeInput" className="form-label">Zip Code</label>
                                                    <input type="text" className="form-control" minlength="5" maxlength="6" id="zipcodeInput" placeholder="Enter zipcode" value="90011" />
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <div className="mb-3 pb-2">
                                                    <label for="exampleFormControlTextarea" className="form-label">Description</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea" placeholder="Enter your description" rows="3">Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
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
                                    {/* <div className="mt-4 mb-3 border-bottom pb-2">
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
                                    </div> */}
                                    {/* <div className="d-flex align-items-center mb-3">
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
                                    </div> */}
                                </div>
                                {/* <!--end tab-pane--> */}
                                <div className="tab-pane" id="experience" role="tabpanel">
                                    <form>
                                        <div id="newlink">
                                            <div id="1">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label for="jobTitle" className="form-label">Job Title</label>
                                                            <input type="text" className="form-control" id="jobTitle" placeholder="Job title" value="Lead Designer / Developer" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="companyName" className="form-label">Company Name</label>
                                                            <input type="text" className="form-control" id="companyName" placeholder="Company name" value="Themesbrand" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="experienceYear" className="form-label">Experience Years</label>
                                                            <div className="row">
                                                                <div className="col-lg-5">
                                                                    <select className="form-control"  name="experienceYear" id="experienceYear">
                                                                        <option value="">Select years</option>
                                                                        <option value="Choice 1">2001</option>
                                                                        <option value="Choice 2">2002</option>
                                                                        <option value="Choice 3">2003</option>
                                                                        <option value="Choice 4">2004</option>
                                                                        <option value="Choice 5">2005</option>
                                                                        <option value="Choice 6">2006</option>
                                                                        <option value="Choice 7">2007</option>
                                                                        <option value="Choice 8">2008</option>
                                                                        <option value="Choice 9">2009</option>
                                                                        <option value="Choice 10">2010</option>
                                                                        <option value="Choice 11">2011</option>
                                                                        <option value="Choice 12">2012</option>
                                                                        <option value="Choice 13">2013</option>
                                                                        <option value="Choice 14">2014</option>
                                                                        <option value="Choice 15">2015</option>
                                                                        <option value="Choice 16">2016</option>
                                                                        <option value="Choice 17" selected>2017</option>
                                                                        <option value="Choice 18">2018</option>
                                                                        <option value="Choice 19">2019</option>
                                                                        <option value="Choice 20">2020</option>
                                                                        <option value="Choice 21">2021</option>
                                                                        <option value="Choice 22">2022</option>
                                                                    </select>
                                                                </div>
                                                                {/* <!--end col--> */}
                                                                <div className="col-auto align-self-center">
                                                                    to
                                                                </div>
                                                                {/* <!--end col--> */}
                                                                <div className="col-lg-5">
                                                                    <select className="form-control"  name="choices-single-default2">
                                                                        <option value="">Select years</option>
                                                                        <option value="Choice 1">2001</option>
                                                                        <option value="Choice 2">2002</option>
                                                                        <option value="Choice 3">2003</option>
                                                                        <option value="Choice 4">2004</option>
                                                                        <option value="Choice 5">2005</option>
                                                                        <option value="Choice 6">2006</option>
                                                                        <option value="Choice 7">2007</option>
                                                                        <option value="Choice 8">2008</option>
                                                                        <option value="Choice 9">2009</option>
                                                                        <option value="Choice 10">2010</option>
                                                                        <option value="Choice 11">2011</option>
                                                                        <option value="Choice 12">2012</option>
                                                                        <option value="Choice 13">2013</option>
                                                                        <option value="Choice 14">2014</option>
                                                                        <option value="Choice 15">2015</option>
                                                                        <option value="Choice 16">2016</option>
                                                                        <option value="Choice 17">2017</option>
                                                                        <option value="Choice 18">2018</option>
                                                                        <option value="Choice 19">2019</option>
                                                                        <option value="Choice 20" selected>2020</option>
                                                                        <option value="Choice 21">2021</option>
                                                                        <option value="Choice 22">2022</option>
                                                                    </select>
                                                                </div>
                                                                {/* <!--end col--> */}
                                                            </div>
                                                            {/* <!--end row--> */}
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label for="jobDescription" className="form-label">Job Description</label>
                                                            <textarea className="form-control" id="jobDescription" rows="3" placeholder="Enter description">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="hstack gap-2 justify-content-end">
                                                        <a className="btn btn-success" href="javascript:deleteEl(1)">Delete</a>
                                                    </div>
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                        </div>
                                        <div id="newForm" style={{ display: "none" }}>

                                        </div>
                                        <div className="col-lg-12">
                                            <div className="hstack gap-2">
                                                <button type="submit" className="btn btn-success">Update</button>
                                                <a href="javascript:new_link()" className="btn btn-primary">Add New</a>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </form>
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