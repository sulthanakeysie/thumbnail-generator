import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/AuthService";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp()
      .then((res) => {
        navigate("/images");
      })
      .catch((err) => {});
  };

  return (
    <div className="form-page-wrapper">
      <form  className="auth-form-wrapper" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group-wrapper">
          <label htmlFor="email">Name:</label>
          <input
            id="email"
            value={email}
            onChange={(event) => setName(event.target.value)}
          />
          {/* {emailError && <span className="error">{emailError}</span>} */}
        </div>
        <div className="form-group-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {/* {emailError && <span className="error">{emailError}</span>} */}
        </div>
        <div className="form-group-wrapper">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* {passwordError && <span className="error">{passwordError}</span>} */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}
