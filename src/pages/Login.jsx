import React, { useState } from "react";
import "../components/login/login.css";

function Login() {
  const [isActive, setActive] = useState(true);
  const handleActivate = () => {
    setActive(!isActive);
  };
  return (
    <div className="container" id="container">
      <div className={`wrapper ${isActive ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form action="">
            <h2>Create Account</h2>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <span>Register with e-mail</span>
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form action="">
            <h2>Sign In</h2>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <span>Login with e-mail & password</span>
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <a href="#">Forget password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Welcome to <br /> Code with Panel</h2>
              <p>Sign in with email</p>
              <button className="hidden" id="login" onClick={handleActivate}>
                Sign Up
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Hi Coder's</h2>
              <p>Join "Code with Panel" to improve your coding skills</p>
              <button className="hidden" id="register" onClick={handleActivate}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
