import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
      <div className="forbidden">
        <p>403</p>
        <h2>Look like you're lost</h2>
        <h5>the page you are looking for not avaible!</h5>
      <Link to="/app/dashboard">Go to Home</Link>
      </div>
  );
};

export default Forbidden;
