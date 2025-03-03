import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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

    toast.success("Login successful");
    navigate("/app/dashboard");
  };

  return (
    <div className="auth-page-wrapper pt-5">
      <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay"></div>
        <img
          src="/assets/images/JF-Inspired.png"
          className="img-fluid"
          style={{ width: "200px" }}
          alt=""
        />
      </div>
      <div className="auth-page-content">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "50px" }}
          >
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
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="position-relative auth-pass-inputgroup">
                          <input
                            type={toggle ? "text" : "password"}
                            className="form-control pe-5 password-input"
                            placeholder="Enter password"
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
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 my-3"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
