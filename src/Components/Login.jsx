import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const checkAuthentication = async () => {
    try {
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        login // Pass the login object as the request payload
      );
      console.log(response.data.authToken);
      localStorage.setItem("auth", response.data.authToken);
      navigate("/formapp");
    } catch (error) {
      navigate("/forgotPassword");
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Levitation</h1>
      </div>
      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <h1>Login Page</h1>
            <p>
              Welcome to the Login page. Please enter your email and password to
              continue to view the site.
            </p>
          </div>

          <input
            type="email"
            placeholder="email@xyz.com"
            onChange={(event) =>
              setLogin({ ...login, email: event.target.value })
            }
          ></input>
          <input
            type="password"
            placeholder="*******"
            onChange={(event) =>
              setLogin({ ...login, password: event.target.value })
            }
          ></input>

          <div className="login-forgot">
            <Link to={"./forgotPassword"}>
              <a>Forgot Password?</a>
            </Link>
          </div>

          <button onClick={checkAuthentication}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
