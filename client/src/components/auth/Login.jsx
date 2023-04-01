import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { login } from "../../services/AuthService";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Auth.css";

const validate = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:validate,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password })
        .then((res) => {
          localStorage.setItem("api_key", res.data.user.api_key);
          navigate("/images");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  });

  return (
    <div className="form-page-wrapper">
      <form className="auth-form-wrapper" onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div className="form-group-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>
        <div className="form-group-wrapper">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error">{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account? <a href="/signup">Signup</a>
      </div>
    </div>
  );
}
