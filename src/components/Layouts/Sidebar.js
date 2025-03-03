import { Link, useParams, useLocation } from "react-router-dom";

export default function SideBar() {
  const { associationId } = useParams();
  const location = useLocation();

  const activeLinkStyle = {
    // backgroundColor: '#c4281b',
    backgroundColor: "#ffffff",
    borderLeft: "3px solid #000",
  };

  const activeLink = {
    color: "#000",
  };

  return (
    // <!-- ========== App Menu ========== -->
    <div className="app-menu navbar-menu">
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box">
        {/* <!-- Dark Logo--> */}
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            {/* <img src="/assets/innermember.png" alt="" height="22" /> */}
          </span>
          <span className="logo-lg">
            {/* <img src="/assets/innermember.png" alt="" height="40" /> */}
          </span>
        </Link>
        {/* <!-- Light Logo--> */}
        <Link to="/" className="logo logo-light">
          <span className="logo-sm">
            {/* <img src="/assets/ActionAid.png" alt="" height="36" /> */}
            <div style={{ fontSize: "20px" }}>Settings</div>
          </span>
          <span className="logo-lg">
            {/* <img src="/assets/ActionAid.png" alt="" height="70" /> */}
            <div className="text-white" style={{ fontSize: "20px" }}>Settings</div>
          </span>
        </Link>
        <button
          type="button"
          className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
          id="vertical-hover"
        >
          <i className="ri-record-circle-line"></i>
        </button>
      </div>

      <div id="scrollbar">
        <div className="container-fluid">
          <div id="two-column-menu"></div>
          <ul className="navbar-nav" id="navbar-nav">
            <li
              style={
                location.pathname === "/app/dashboard" ? activeLinkStyle : {}
              }
              className="nav-item mt-4"
            >
              <Link className="nav-link menu-link" to="/app/dashboard">
                <i
                  className="ri-bar-chart-horizontal-fill"
                  style={
                    location.pathname === "/app/dashboard" ? activeLink : {}
                  }
                ></i>
                <span
                  data-key="t-dashboards"
                  style={
                    location.pathname === "/app/dashboard" ? activeLink : {}
                  }
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="menu-title">
              <span data-key="t-menu">Parameter Management</span>
            </li>

            <li
              className="nav-item"
              style={location.pathname === "/app/index" ? activeLinkStyle : {}}
            >
              <Link className="nav-link menu-link" to="/app/index">
                <i
                  className="ri-dashboard-2-line"
                  style={location.pathname === "/app/index" ? activeLink : {}}
                ></i>
                <span
                  data-key="t-widgets"
                  style={location.pathname === "/app/index" ? activeLink : {}}
                >
                  Repositories{" "}
                </span>
              </Link>
            </li>
            <li
              className="nav-item"
              style={
                location.pathname === "/app/user/vendor" ? activeLinkStyle : {}
              }
            >
              <Link className="nav-link menu-link" to="/app/user/vendor">
                <i
                  className="ri-dashboard-2-line"
                  style={
                    location.pathname === "/app/user/vendor" ? activeLink : {}
                  }
                ></i>
                <span
                  data-key="t-widgets"
                  style={
                    location.pathname === "/app/user/vendor" ? activeLink : {}
                  }
                >
                  Storage Account{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Sidebar --> */}
      </div>

      <div className="sidebar-background"></div>
    </div>
  );
}
