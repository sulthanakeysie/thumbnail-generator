import React, { useState } from "react";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailError = () => {
    if (!email) setEmailError("Email is required");
    else setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordError = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleEmailError();
    handlePasswordError();

    if (!emailError && !passwordError) {
      console.log("Submitting form...");
    }
  };
  return (
    <div className="form-page-wrapper">
      <form className="auth-form-wrapper" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailError}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-page-wrapper">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordError}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account? <a href="/signup">Signup</a>
      </div>
    </div>
  );
}
