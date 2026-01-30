import React, { useState } from "react";
import "animate.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setAlert({ type: "danger", message: "Please enter your email!" });
      setTimeout(() => setAlert(null), 4000);
      return;
    }

    // Call your password reset API here
    setAlert({ type: "success", message: "Password reset link sent to your email!" });
    setEmail("");
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4 rounded-4 animate__animated animate__fadeIn">
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "120px" }}
          />
          <h3 className="fw-bold mt-3 text-success">Forgot Password</h3>
          <p className="text-muted">Enter your email to reset your password</p>
        </div>

        {alert && (
          <div className={`alert alert-${alert.type} text-center animate__animated animate__fadeIn`}>
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success fw-semibold py-2 animate__animated animate__pulse animate__infinite"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted">
            Remembered your password?{" "}
            <Link to="/login" className="text-success text-decoration-none fw-semibold">
              Login
            </Link>
          </p>
          <p className="text-muted">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-success text-decoration-none fw-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
