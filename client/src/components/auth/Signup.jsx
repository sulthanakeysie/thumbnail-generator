import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/AuthService";
import { toast } from "react-toastify";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signup = async (event) => {
    event.preventDefault();
    signUp({ name, email, password })
      .then((res) => {
        localStorage.setItem("api_key", res.data.user.api_key);
        navigate("/images");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="form-page-wrapper">
      <form className="auth-form-wrapper" onSubmit={signup}>
        <h2>Sign Up</h2>
        <div className="form-group-wrapper">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group-wrapper">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div>
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}
