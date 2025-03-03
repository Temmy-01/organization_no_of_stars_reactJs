import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
      <div className="forbidden">
        <p className="lost">404</p>
        <h2>Look like you're lost</h2>
        <h5>the page you are looking for not avaible!</h5>
        <a href="#">Go to Home</a>
      </div>
  );
};

export default NotFoundPage;
