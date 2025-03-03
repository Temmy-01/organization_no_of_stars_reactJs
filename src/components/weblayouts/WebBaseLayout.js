import { Outlet } from "react-router-dom";
import FooterPage from "./Footer";
import HeaderPage from "./Header";

export default function WebBaseLayout({children}) {
    return (
        <div style={{backgroundColor: '#fffff !important'}}>
            {/* <HeaderPage /> */}
            {/* <Outlet /> */}
            {children}
            {/* <FooterPage /> */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}