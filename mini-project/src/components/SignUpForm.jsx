import "./SignUpStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="sign">
      <h1>Sign Up</h1>
      <form>
        <input placeholder="Username"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input placeholder="Country"></input>
        <textarea
          placeholder="Any additional information?"
          rows="10"
          cols="50"
        ></textarea>
        <button>Submit</button>
      </form>
      <div>
        <Link to="/login" className="Login">
          Already Signed Up? Login!
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
