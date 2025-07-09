import "./LoginFormStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input placeholder="Username/Email"></input>
        <input placeholder="Password"></input>
        <button>Login</button>
      </form>
      <div>
        <Link to="/signup" className="SignUp">
          Don't have a Account? Create One!
        </Link>
        <br></br>
        <Link to="/login" className="forgot">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
