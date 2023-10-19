import React from "react";
import "./signInPage.css";

function SignInPage() {
  return (
    <>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div className="form-submit-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default SignInPage;
