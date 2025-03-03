import useAuth from "../../hooks/useAuthContext"

export default function DashboardPage() {
    

    return (
        <>
            <div className="row">
                <div className="col">

                    <div className="h-100">
                        <div className="row mb-3 pb-1">
                            <div className="col-12">
                                <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                    <div className="flex-grow-1">
                                        
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card crm-widget">
                                    <div className="card-body p-0">
                                        <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-1 g-0">
                                            <div className="col">
                                                <div className="py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Total Order for the Month  <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-space-ship-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" data-target="5">0</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                            <div className="col">
                                                <div className="mt-3 mt-md-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Total Sales Made Today  <i className="ri-arrow-up-circle-line text-warning fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            {/* <i className="ri-exchange-dollar-line display-6 text-muted"></i> */}
                                                            <i className="bi bi-gift display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" data-target="8">8</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                            <div className="col">
                                                <div className="mt-3 mt-md-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Total Sales for the Month (July)  <i className="ri-arrow-down-circle-line text-warning fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-time-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" data-target="7">0</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                            <div className="col">
                                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Total Sales for the Month (July) <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-trophy-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" data-target="15">0</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                            <div className="col">
                                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Top Selling Product <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-service-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" style={{fontSize:"20px", lineHeight:"2px"}} data-target="1050">Fabbri Mixybar</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- end col --> */}
                                            <div className="col">
                                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Total Product Sold  <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-service-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" data-target="1050">1200000</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Top Buying Customer <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-service-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" style={{fontSize:"20px", lineHeight:"2px"}} data-target="1050">Divine Confectioneries</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                                    <h5 className="text-muted text-uppercase fs-13">Top Outlet <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i></h5>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-service-line display-6 text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h2 className="mb-0"><span className="counter-value" style={{fontSize:"20px", lineHeight:"2px"}} data-target="1050">Victoria Island</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                        </div> {/* <!-- end row --> */}
                                    </div>{/* <!-- end card body --> */}
                                </div>{/* <!-- end card --> */}
                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row--> */}

                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="card">
                                    <div className="card-header border-0">
                                        <h4 className="card-title mb-0">Upcoming Activities.</h4>
                                    </div>{/* <!-- end cardheader --> */}
                                    <div className="card-body pt-0">
                                        {/* <h6 className="text-uppercase fw-semibold mt-4 mb-3 text-muted">Events:</h6> */}
                                        <div className="mini-stats-wid d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 avatar-sm">
                                                <span className="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                                                    09
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Development planning</h6>
                                                <p className="text-muted mb-0">September, 2023 </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <p className="text-muted mb-0">9:20 <span className="text-uppercase">am</span></p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="mini-stats-wid d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 avatar-sm">
                                                <span className="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                                                    12
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Design new UI and check sales</h6>
                                                <p className="text-muted mb-0">January, 2024</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <p className="text-muted mb-0">11:30 <span className="text-uppercase">am</span></p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="mini-stats-wid d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 avatar-sm">
                                                <span className="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                                                    25
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Weekly catch-up </h6>
                                                <p className="text-muted mb-0">February, 2024</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <p className="text-muted mb-0">02:00 <span className="text-uppercase">pm</span></p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="mini-stats-wid d-flex align-items-center mt-3">
                                            <div className="flex-shrink-0 avatar-sm">
                                                <span className="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                                                    27
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">James Bangs (Client) Meeting</h6>
                                                <p className="text-muted mb-0">August, 2023</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <p className="text-muted mb-0">03:45 <span className="text-uppercase">pm</span></p>
                                            </div>
                                        </div>{/* <!-- end --> */}

                                        <div className="mt-3 text-center">
                                            <a href="javascript:void(0);" className="text-muted text-decoration-underline">View all Activities.</a>
                                        </div>

                                    </div>{/* <!-- end cardbody --> */}
                                </div>{/* <!-- end card --> */}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card card-height-100">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">News Feed</h4>
                                        <div>
                                            <button type="button" className="btn btn-soft-primary btn-sm">
                                                View all
                                            </button>
                                        </div>
                                    </div>{/* <!-- end card-header --> */}

                                    <div className="card-body">
                                        <div className="d-flex align-middle">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/small/img-1.jpg" className="rounded img-fluid" style={{height: "60px"}} alt="" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base"><a href="#" className="text-reset">One stop shop destination on all the latest news in crypto currencies</a></h6>
                                                <p className="text-muted fs-12 mb-0">Dec 12, 2021 <i className="mdi mdi-circle-medium align-middle mx-1"></i>09:22 AM</p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/small/img-2.jpg" className="rounded img-fluid" style={{height: "60px"}} alt="" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base"><a href="#" className="text-reset">Coin Journal is dedicated to delivering stories on the latest crypto</a></h6>
                                                <p className="text-muted fs-12 mb-0">Dec 03, 2021 <i className="mdi mdi-circle-medium align-middle mx-1"></i>12:09 PM</p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/small/img-3.jpg" className="rounded img-fluid" style={{height: "60px"}} alt="" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base"><a href="#" className="text-reset">The bitcoin-holding U.S. senator is trying to “fully integrate” crypto </a></h6>
                                                <p className="text-muted fs-12 mb-0">Nov 22, 2021 <i className="mdi mdi-circle-medium align-middle mx-1"></i>11:47 AM</p>
                                            </div>
                                        </div>{/* <!-- end --> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/small/img-6.jpg" className="rounded img-fluid" style={{height: "60px"}} alt="" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base"><a href="#" className="text-reset">Cryptocurrency price like Bitcoin, Dash, Dogecoin, Ripple and Litecoin</a></h6>
                                                <p className="text-muted fs-12 mb-0">Nov 18, 2021 <i className="mdi mdi-circle-medium align-middle mx-1"></i>06:13 PM</p>
                                            </div>
                                        </div>{/* <!-- end --> */}

                                        <div className="mt-3 text-center">
                                            <a href="javascript:void(0);" className="text-muted text-decoration-underline">View all News</a>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}
                            </div>

                            <div className="col-xl-6">
                                <div className="card card-height-100">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Donors</h4>
                                        <div className="flex-shrink-0">
                                            <div>
                                                <button type="button" className="btn btn-soft-primary btn-sm">
                                                    View all
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}

                                    <div className="card-body">
                                        <div className="table-responsive table-card">
                                            <table
                                                className="table table-centered table-hover align-middle table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/companies/img-1.png"
                                                                        alt="" className="avatar-sm p-2" />
                                                                </div>
                                                                <div>
                                                                    <h5 className="fs-14 my-1 fw-medium">
                                                                        <a href="apps-ecommerce-seller-details.html"
                                                                            className="text-reset"> Fort Foundation,</a>
                                                                    </h5>
                                                                    {/* <span className="text-muted">Oliver Tyler</span> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-subtle text-success">
                                                                Paid
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">$541200</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 mb-0">32%<i
                                                                className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end --> */}
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/companies/img-2.png"
                                                                        alt="" className="avatar-sm p-2" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-14 my-1 fw-medium"><a
                                                                        href="apps-ecommerce-seller-details.html"
                                                                        className="text-reset">  Obama Foundation,
                                                                        </a></h5>
                                                                    {/* <span className="text-muted">John Roberts</span> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger">
                                                                Free
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">$75030</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 mb-0">79%<i
                                                                className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end --> */}
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/companies/img-3.png"
                                                                        alt="" className="avatar-sm p-2" />
                                                                </div>
                                                                <div className="flex-gow-1">
                                                                    <h5 className="fs-14 my-1 fw-medium"><a
                                                                        href="apps-ecommerce-seller-details.html"
                                                                        className="text-reset"> Dangote Foundation</a></h5>
                                                                    {/* <span className="text-muted">Harley
                                                                        Fuller</span> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-subtle text-success">
                                                                Paid
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">$45600</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 mb-0">90%<i
                                                                className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end --> */}
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/companies/img-8.png"
                                                                        alt="" className="avatar-sm p-2" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-14 my-1 fw-medium"><a
                                                                        href="apps-ecommerce-seller-details.html"
                                                                        className="text-reset">Bill Gate Foundation</a></h5>
                                                                    {/* <span className="text-muted">James Bowen</span> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-subtle text-success">
                                                                Paid
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">$29456</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 mb-0">40%<i
                                                                className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end --> */}
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/companies/img-5.png"
                                                                        alt="" className="avatar-sm p-2" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-14 my-1 fw-medium">
                                                                        <a href="apps-ecommerce-seller-details.html"
                                                                            className="text-reset">NCS Foundation</a>
                                                                    </h5>
                                                                    {/* <span className="text-muted">Zoe Dennis</span> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger">
                                                                Free
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">$11260</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 mb-0">57%<i
                                                                className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end --> */}
                                                </tbody>
                                            </table>
                                            {/* <!-- end table --> */}
                                        </div>

                                        <div
                                            className="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                            <div className="col-sm">
                                                <div className="text-muted">
                                                    Showing <span className="fw-semibold">5</span> of <span
                                                        className="fw-semibold">25</span> Results
                                                </div>
                                            </div>
                                            <div className="col-sm-auto  mt-3 mt-sm-0">
                                                <ul
                                                    className="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                                    <li className="page-item disabled">
                                                        <a href="#" className="page-link">←</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a href="#" className="page-link">1</a>
                                                    </li>
                                                    <li className="page-item active">
                                                        <a href="#" className="page-link">2</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a href="#" className="page-link">3</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a href="#" className="page-link">→</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- .card-body--> */}
                                </div>
                                {/* <!-- .card--> */}
                            </div>
                            {/* <!-- .col--> */}
                        </div>
                        {/* <!-- end row--> */}

                    </div>
                    {/* <!-- end .h-100--> */}

                </div>
                {/* <!-- end col --> */}

                <div className="col-auto layout-rightside-col">
                    <div className="overlay"></div>
                    <div className="layout-rightside">
                        <div className="card h-100 rounded-0">
                            <div className="card-body p-0">
                                <div className="p-3">
                                    <h6 className="text-muted mb-0 text-uppercase fw-semibold">Recent Activity</h6>
                                </div>
                                <div data-simplebar style={{maxHeight: "410px"}} className="p-3 pt-0">
                                    <div className="acitivity-timeline acitivity-main">
                                        <div className="acitivity-item d-flex">
                                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div
                                                    className="avatar-title bg-success-subtle text-success rounded-circle">
                                                    <i className="ri-shopping-cart-2-line"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Purchase by James Price</h6>
                                                <p className="text-muted mb-1">Product noise evolve smartwatch </p>
                                                <small className="mb-0 text-muted">02:14 PM Today</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div
                                                    className="avatar-title bg-danger-subtle text-danger rounded-circle">
                                                    <i className="ri-stack-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Added new <span
                                                    className="fw-semibold">style collection</span></h6>
                                                <p className="text-muted mb-1">By Nesta Technologies</p>
                                                <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                                                    <a href="apps-ecommerce-product-details.html"
                                                        className="bg-light rounded p-1">
                                                        <img src="/assets/images/products/img-8.png" alt=""
                                                            className="img-fluid d-block" />
                                                    </a>
                                                    <a href="apps-ecommerce-product-details.html"
                                                        className="bg-light rounded p-1">
                                                        <img src="/assets/images/products/img-2.png" alt=""
                                                            className="img-fluid d-block" />
                                                    </a>
                                                    <a href="apps-ecommerce-product-details.html"
                                                        className="bg-light rounded p-1">
                                                        <img src="/assets/images/products/img-10.png" alt=""
                                                            className="img-fluid d-block" />
                                                    </a>
                                                </div>
                                                <p className="mb-0 text-muted"><small>9:47 PM Yesterday</small></p>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-2.jpg" alt=""
                                                    className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Natasha Carey have liked the products
                                                </h6>
                                                <p className="text-muted mb-1">Allow users to like products in your
                                                    WooCommerce store.</p>
                                                <small className="mb-0 text-muted">25 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle bg-secondary">
                                                        <i className="mdi mdi-sale fs-14"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Today offers by <a
                                                    href="apps-ecommerce-seller-details.html"
                                                    className="link-secondary">Digitech Galaxy</a></h6>
                                                <p className="text-muted mb-2">Offer is valid on orders of Rs.500 Or
                                                    above for selected products only.</p>
                                                <small className="mb-0 text-muted">12 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div
                                                        className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                        <i className="ri-bookmark-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Favorite Product</h6>
                                                <p className="text-muted mb-2">Esther James have Favorite product.
                                                </p>
                                                <small className="mb-0 text-muted">25 Nov, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div className="avatar-title rounded-circle bg-secondary">
                                                        <i className="mdi mdi-sale fs-14"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Flash sale starting <span
                                                    className="text-primary">Tomorrow.</span></h6>
                                                <p className="text-muted mb-0">Flash sale by <a
                                                    href="javascript:void(0);"
                                                    className="link-secondary fw-medium">Zoetic Fashion</a></p>
                                                <small className="mb-0 text-muted">22 Oct, 2021</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-xs acitivity-avatar">
                                                    <div
                                                        className="avatar-title rounded-circle bg-info-subtle text-info">
                                                        <i className="ri-line-chart-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Monthly sales report</h6>
                                                <p className="text-muted mb-2"><span className="text-danger">2 days
                                                    left</span> notification to submit the monthly sales
                                                    report. <a href="javascript:void(0);"
                                                        className="link-warning text-decoration-underline">Reports
                                                        Builder</a></p>
                                                <small className="mb-0 text-muted">15 Oct</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item d-flex">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-3.jpg" alt=""
                                                    className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Frank Hook Commented</h6>
                                                <p className="text-muted mb-2 fst-italic">" A product that has
                                                    reviews is more likable to be sold than a product. "</p>
                                                <small className="mb-0 text-muted">26 Aug, 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 mt-2">
                                    <h6 className="text-muted mb-3 text-uppercase fw-semibold">Top 10 Categories
                                    </h6>

                                    <ol className="ps-3 text-muted">
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Mobile & Accessories <span
                                                className="float-end">(10,294)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Desktop <span
                                                className="float-end">(6,256)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Electronics <span
                                                className="float-end">(3,479)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Home & Furniture <span
                                                className="float-end">(2,275)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Grocery <span
                                                className="float-end">(1,950)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Fashion <span
                                                className="float-end">(1,582)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Appliances <span
                                                className="float-end">(1,037)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Beauty, Toys & More <span
                                                className="float-end">(924)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Food & Drinks <span
                                                className="float-end">(701)</span></a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#" className="text-muted">Toys & Games <span
                                                className="float-end">(239)</span></a>
                                        </li>
                                    </ol>
                                    <div className="mt-3 text-center">
                                        <a href="javascript:void(0);"
                                            className="text-muted text-decoration-underline">View all Categories</a>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h6 className="text-muted mb-3 text-uppercase fw-semibold">Products Reviews</h6>
                                    {/* <!-- Swiper --> */}
                                    <div className="swiper vertical-swiper" style={{height: "250px"}}>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="card border border-dashed shadow-none">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-sm">
                                                                <div className="avatar-title bg-light rounded">
                                                                    <img src="/assets/images/companies/img-1.png"
                                                                        alt="" height="30" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <div>
                                                                    <p
                                                                        className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                        " Great product and looks great, lots of
                                                                        features. "</p>
                                                                    <div
                                                                        className="fs-11 align-middle text-warning">
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end mb-0 text-muted">
                                                                    - by <cite title="Source Title">Force
                                                                        Medicines</cite>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card border border-dashed shadow-none">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src="/assets/images/users/avatar-3.jpg"
                                                                    alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <div>
                                                                    <p
                                                                        className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                        " Amazing template, very easy to
                                                                        understand and manipulate. "</p>
                                                                    <div
                                                                        className="fs-11 align-middle text-warning">
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-half-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end mb-0 text-muted">
                                                                    - by <cite title="Source Title">Henry
                                                                        Baird</cite>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card border border-dashed shadow-none">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-sm">
                                                                <div className="avatar-title bg-light rounded">
                                                                    <img src="/assets/images/companies/img-8.png"
                                                                        alt="" height="30" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <div>
                                                                    <p
                                                                        className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                        "Very beautiful product and Very helpful
                                                                        customer service."</p>
                                                                    <div
                                                                        className="fs-11 align-middle text-warning">
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-line"></i>
                                                                        <i className="ri-star-line"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end mb-0 text-muted">
                                                                    - by <cite title="Source Title">Zoetic
                                                                        Fashion</cite>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card border border-dashed shadow-none">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src="/assets/images/users/avatar-2.jpg"
                                                                    alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <div>
                                                                    <p
                                                                        className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                        " The product is very beautiful. I like
                                                                        it. "</p>
                                                                    <div
                                                                        className="fs-11 align-middle text-warning">
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-half-fill"></i>
                                                                        <i className="ri-star-line"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end mb-0 text-muted">
                                                                    - by <cite title="Source Title">Nancy
                                                                        Martino</cite>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3">
                                    <h6 className="text-muted mb-3 text-uppercase fw-semibold">Customer Reviews</h6>
                                    <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="fs-16 align-middle text-warning">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-half-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h6 className="mb-0">4.5 out of 5</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-muted">Total <span className="fw-medium">5.50k</span>
                                            reviews</div>
                                    </div>

                                    <div className="mt-3">
                                        <div className="row align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0">5 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-1">
                                                    <div className="progress animated-progress progress-sm">
                                                        <div className="progress-bar bg-success" role="progressbar"
                                                            style={{width: "50.16%"}} aria-valuenow="50.16"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0 text-muted">2758</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}

                                        <div className="row align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0">4 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-1">
                                                    <div className="progress animated-progress progress-sm">
                                                        <div className="progress-bar bg-success" role="progressbar"
                                                            style={{width: "29.32%"}} aria-valuenow="29.32"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0 text-muted">1063</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}

                                        <div className="row align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0">3 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-1">
                                                    <div className="progress animated-progress progress-sm">
                                                        <div className="progress-bar bg-warning" role="progressbar"
                                                            style={{width: "18.12%"}} aria-valuenow="18.12"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0 text-muted">997</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}

                                        <div className="row align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0">2 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-1">
                                                    <div className="progress animated-progress progress-sm">
                                                        <div className="progress-bar bg-success" role="progressbar"
                                                            style={{width: "4.98%"}} aria-valuenow="4.98"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0 text-muted">227</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}

                                        <div className="row align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0">1 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-1">
                                                    <div className="progress animated-progress progress-sm">
                                                        <div className="progress-bar bg-danger" role="progressbar"
                                                            style={{width: "7.42%"}} aria-valuenow="7.42"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-1">
                                                    <h6 className="mb-0 text-muted">408</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                </div>

                                <div className="card sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3">
                                    <div className="card-body">
                                        <img src="/assets/images/giftbox.png" alt="" />
                                        <div className="mt-4">
                                            <h5>Invite New Seller</h5>
                                            <p className="text-muted lh-base">Refer a new seller to us and earn $100
                                                per refer.</p>
                                            <button type="button"
                                                className="btn btn-primary btn-label rounded-pill"><i
                                                    className="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"></i>
                                                Invite Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- end card--> */}
                    </div>
                    {/* <!-- end .rightbar--> */}

                </div>
                {/* <!-- end col --> */}
            </div>
        </>
    )
}