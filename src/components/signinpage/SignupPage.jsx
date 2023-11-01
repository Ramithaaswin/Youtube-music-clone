import React, { useState } from "react";
import "./signInPage.css";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    if (password !== confirmPassword) {
      alert("Passwords does not match");
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <div className="form-submit-button">
          <button type="submit">Signup</button>
        </div>
        <div className="link-to-signin">
          <p>Already a user?</p>
          <Link to="/signin">
            <button>signin</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignupPage;
