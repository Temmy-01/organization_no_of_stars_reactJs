import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./Sidebar";
import { useEffect, useState } from "react";

export default function BaseLayout({ children }) {
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const scriptUrls = [
        '/assets/libs/simplebar/simplebar.min.js',
        // 'assets/libs/node-waves/waves.min.js',
        // 'assets/libs/feather-icons/feather.min.js',
        '/assets/js/pages/plugins/lord-icon-2.1.0.js',
        // 'assets/js/plugins.js',
        // 'assets/libs/apexcharts/apexcharts.min.js',
        // 'assets/libs/jsvectormap/js/jsvectormap.min.js',
        // 'assets/libs/jsvectormap/maps/world-merc.js',
        "/assets/libs/prismjs/prism.js",
        '/assets/js/pages/dashboard-ecommerce.init.js',
        '/assets/js/pages/dashboard-crm.init.js',
        "/assets/js/pages/swiper.init.js",
        "/assets/js/pages/profile-setting.init.js",
        '/assets/js/app.js'
    ];

    useEffect(() => {
        // This function will run when the component mounts
        setIsPageLoaded(true);

        // Import and load your JavaScript script if the page has loaded
        if (isPageLoaded) {
            // const script = document.createElement('script');
            // script.src = 'assets/js/app.js';
            // script.async = true;
            // document.body.appendChild(script);
            scriptUrls.forEach(scriptUrl => {
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                document.body.appendChild(script);
            });
        }
    }, [isPageLoaded]);
    
    const topFunction= () => { 
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0 
    }

    // useEffect(() => {
    //     const loadScripts = () => {
    //         // Array of script URLs to load
    //         const scriptUrls = [
    //             'assets/libs/simplebar/simplebar.min.js',
    //             // 'assets/libs/node-waves/waves.min.js',
    //             // 'assets/libs/feather-icons/feather.min.js',
    //             'assets/js/pages/plugins/lord-icon-2.1.0.js',
    //             'assets/js/plugins.js',
    //             // 'assets/libs/apexcharts/apexcharts.min.js',
    //             // 'assets/libs/jsvectormap/js/jsvectormap.min.js',
    //             // 'assets/libs/jsvectormap/maps/world-merc.js',
    //             'assets/libs/swiper/swiper-bundle.min.js',
    //             'assets/js/pages/dashboard-ecommerce.init.js',
    //             'assets/js/app.js'
    //         ];

    //         // Check if the page has already loaded
    //         if (document.readyState === 'complete') {
    //             // Page has already loaded, load the scripts immediately
    //             loadScriptsNow();
    //         } else {
    //             // Page is still loading, wait for the 'load' event
    //             window.onload = loadScriptsNow;
    //         }

    //         function loadScriptsNow() {
    //             // Loop through the script URLs and load each one
    //             scriptUrls.forEach(scriptUrl => {
    //                 const script = document.createElement('script');
    //                 script.src = scriptUrl;
    //                 script.async = true;
    //                 document.body.appendChild(script);
    //             });
    //         }
    //     };

    //     loadScripts();
    // }, []);

    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <SideBar />
                {/* <!-- Vertical Overlay--> */}
                <div className="vertical-overlay"></div>
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            {/* <Outlet /> */}
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            {/* <!--start back-to-top--> */}
            <button onClick={topFunction} className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </button>
            {/* <!--end back-to-top--> */}

            {/* <!--preloader--> */}
            {/* <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> */}
        </>
    )
}