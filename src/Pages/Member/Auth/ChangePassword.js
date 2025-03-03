import { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../hooks/axiosInstance";
import ReactPasswordChecklist from "react-password-checklist";

export default function PasswordChangePage() {
  const navigate = useNavigate();

  const [queryParameters] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: localStorage.getItem("resetEmail"),
    password: "",
    password_confirmation: "",
    token: queryParameters.get("token"),
  });
  const [validationError, setValidationError] = useState({});
  const { password, password_confirmation } = userData;

  const [toggle, setToggle] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleConfirmToggle = () => {
    setToggleConfirm(!toggleConfirm);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "" || password_confirmation === "") {
      toast.error("Pls enter all required!");
    } else if (password !== password_confirmation) {
      toast.error("Password not match");
    } else {
      setLoading(true);
      setValidationError({});
      axiosInstance
        .post("/user/auth/password/reset", userData)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.removeItem("resetEmail");
          navigate("/auth/login");
        })
        .catch((err) => {
          toast.error("An error occured. Please, try again");
          if (err.response.status == 422) {
            setValidationError(err.response.data.errors);
          }
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <div className="auth-page-wrapper pt-5">
        {/* <!-- auth page bg --> */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

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
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img
                        src="/assets/innermember-white.png"
                        alt=""
                        height="50"
                      />
                    </a>
                  </div>
                  {/* <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p> */}
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}

            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create new password</h5>
                      <p className="text-muted">
                        Your new password must be different from previous used
                        password.
                      </p>
                    </div>

                    <div className="p-2">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
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
                              value={password}
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
                          {password && (
                            <ReactPasswordChecklist
                              className="p-3 bg-light mb-2 mt-2 rounded"
                              rules={[
                                "minLength",
                                "specialChar",
                                "number",
                                "capital",
                                "match",
                              ]}
                              minLength={8}
                              value={password}
                              valueAgain={password_confirmation}
                            />
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label" for="password-input">
                            Confirm Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup">
                            <input
                              type={toggleConfirm ? `text` : `password`}
                              className="form-control pe-5 password-input"
                              placeholder="Enter password"
                              aria-describedby="passwordInput"
                              onChange={handleChange}
                              value={password_confirmation}
                              name="password_confirmation"
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              onClick={handleConfirmToggle}
                            >
                              <i
                                className={`${
                                  toggleConfirm
                                    ? "ri-eye-off-fill"
                                    : "ri-eye-fill"
                                } align-middle`}
                              ></i>
                            </button>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <div className="spinner-border spinner-border-sm text-light"></div>
                            ) : (
                              "Reset Password"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- end card body --> */}
                </div>
                {/* <!-- end card --> */}

                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Wait, I remember my password...{" "}
                    <Link
                      to="/auth/login"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                      {" "}
                      Click here{" "}
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
