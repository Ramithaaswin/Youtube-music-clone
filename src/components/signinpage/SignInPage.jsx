import React, { useState } from "react";
import "./signInPage.css";

function SignInPage() {
  const [loginusername, setLoginUsername] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (loginusername === storedUsername && loginpassword === storedPassword) {
      window.location.href = "/";
      window.location.reload();
    } else {
      setError("Invalid username and password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={loginusername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={loginpassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        <div className="form-submit-button">
          <button type="submit">SignIn</button>
        </div>
      </form>
    </>
  );
}

export default SignInPage;
