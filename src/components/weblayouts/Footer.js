export default function FooterPage() {
    return (
        <>
            <footer id="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Subscribe to our newsletter and receive regular updates, exclusive offers, and
                                    valuable insights directly in your inbox.
                                </p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <a href="index.html" className="logo me-auto">
                                    <img src="/assets/innermember.png" alt="" className="img-fluid" width={'100'} />
                                </a>
                                <p className="mt-3">
                                    8B Ogidi Crescent <br />
                                    Lekki Phase 1<br />
                                    Lagos, Nigeria <br /><br />
                                    <strong>Phone:</strong> +234 703 410 7070<br />
                                    <strong>Email:</strong> info@innermember.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">InnerMember</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Features</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#pricing">Pricing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Membership</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Dues</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Forum</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">News</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Messaging</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Association Profile</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Location</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Follow Us</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-youtube"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>InnerMember</span></strong>. All Rights Reserved
                    </div>
                    {/* <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div> */}
                </div>
            </footer>
        </>
    )
}