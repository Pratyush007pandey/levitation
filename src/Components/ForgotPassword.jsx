import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="formapp-container">
      <div className="formapp-card">
        <h1>forgot password?</h1>
        <p>Think harder</p>

        <Link to={"/"}>
          <button>Go back to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
