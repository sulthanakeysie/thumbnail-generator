import React from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/AuthService";
import { toast } from "react-toastify";
import "./Auth.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        localStorage.setItem("api_key", res.data.user.api_key);
        navigate("/images");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="form-page-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="auth-form-wrapper">
            <h2>Sign Up</h2>
            <div className="form-group-wrapper">
              <label htmlFor="name">Name:</label>
              <Field id="name" name="name" type="text" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group-wrapper">
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group-wrapper">
              <label htmlFor="password">Password:</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
      <div>
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}
