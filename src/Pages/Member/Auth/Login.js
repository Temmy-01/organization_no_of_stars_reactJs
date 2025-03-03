import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../hooks/axiosInstance";
import useAuth from "../../../hooks/useAuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const reset = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.password) {
      toast.error("Password cannot be empty");
      return;
    }
    if (!formData.email) {
      toast.error("Email cannot be empty");
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    localStorage.removeItem("userData");
    axiosInstance
      .post("http://127.0.0.1:8001/api/v1/user/auth/login", formData)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        setUserData((prevUserData) => ({
          ...prevUserData,
          userInfo: res.data.data,
        }));
        reset();
        navigate("/app/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error("An error occured. Please, try again");
        setErrorMsg(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="auth-page-wrapper pt-5">
        {/* <!-- auth page bg --> */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>
          <img src="/assets/images/JF-Inspired.png" className="img-fluid" style={{width:"200px"}} alt="" />



          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
          </div>
        </div>

        {/* <!-- auth page content --> */}
        <div className="auth-page-content">
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img src="/assets/just_food_limited_cover.jpeg" alt="" height="70" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- end row --> */}

            <div className="row justify-content-center" style={{marginTop:"80px"}}>
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">
                        Sign in to continue to JustFood
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      {errorMsg && (
                        <div className="alert alert-danger p-2">
                          <i className="bx bx-error"></i> {errorMsg}
                        </div>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label for="className=" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {/* {validationError.email && (<small className="text-danger mt-1 mb-0">{validationError.email[0]}</small>)} */}
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link
                              to="/auth/forgot-password"
                              className="text-muted"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <label className="form-label" for="password-input">
                            Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup">
                            <input
                              type={toggle ? `text` : `password`}
                              className="form-control pe-5 password-input"
                              placeholder="Enter password"
                              aria-describedby="passwordInput"
                              onChange={handleChange}
                              value={formData.password}
                              name="password"
                              required
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              onClick={handleToggle}
                            >
                              <i
                                className={`${
                                  toggle ? "ri-eye-off-fill" : "ri-eye-fill"
                                } align-middle`}
                              ></i>
                            </button>
                            <div className="invalid-feedback">
                              Please enter password
                            </div>
                          </div>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <label
                            className="form-check-label"
                            for="auth-remember-check"
                          >
                            Remember me
                          </label>

                          {/* <div className="mt-4">
                            <button
                              className="btn btn-success w-100"
                              type="submit"
                            >
                              <Link
                                className="nav-link menu-link"
                                to="/app/dashboard"
                              >
                                <span>Sign In </span>
                              </Link>
                            </button>
                          </div> */}
                          <div className="col-12">
                          <button
                            className="btn btn-primary w-100 my-3"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <div className="spinner-border spinner-border-sm text-light"></div>
                            ) : (
                              "Login"
                            )}
                          </button>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- end card body --> */}
                </div>
                {/* <!-- end card --> */}

                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Don't have an account ?{" "}
                    <Link
                      to="/auth/register"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                      {" "}
                      Sign Up{" "}
                    </Link>{" "}
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
  );
}
