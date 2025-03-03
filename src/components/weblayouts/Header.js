export default function HeaderPage() {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                {/* <h1 className="logo me-auto">
                    <a href="index.html">
                        Inner
                        <b className="text-warning">Member</b>
                    </a>
                </h1> */}
                <a href="/" className="logo me-auto">
                    <img src="/assets/innermember-white.png" alt="" className="img-fluid" />
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">Inner Member</a></li>
                    <li><a className="nav-link scrollto" href="#services">Features</a></li>
                    {/* <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li> */}
                    <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    <li><a className="nav-link scrollto" href="/auth/login">Login</a></li>
                    <li><a className="getstarted scrollto" href="/auth/register">Sign Up</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
        </>
    )
}