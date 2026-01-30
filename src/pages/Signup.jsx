import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem(formData.email)) {
      setAlert({ type: "danger", message: "❌ Email already exists. Please login." });
      setTimeout(() => setAlert(null), 3000);
    } else {
      localStorage.setItem(formData.email, JSON.stringify(formData));
      setAlert({ type: "success", message: "✅ Signup successful! Redirecting to Login..." });

      setTimeout(() => navigate("/login"), 1500);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f9b0f, #000000)",
        padding: "30px",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-center text-white mb-2 fw-bold">Create Account</h2>
        <p className="text-center text-light mb-4">
          Join us and explore intelligent energy solutions
        </p>

        {alert && (
          <div className={`alert alert-${alert.type} text-center`}>
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 py-2 fw-bold"
            style={{ borderRadius: "10px", fontSize: "16px" }}
          >
            Sign Up
          </button>
        </form>

        {/* Social Login Section */}
        {/* <div className="text-center mt-4">
          <p className="opacity-75 text-white">Or signup with</p>

          <div className="d-flex justify-content-center gap-4">
            <FaGoogle size={26} className="social-icon" />
            <FaFacebook size={26} className="social-icon" />
          </div>
        </div> */}

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "#00ff7f", fontWeight: "600" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

        {/* Social Icon Hover CSS */}
        <style>{`
          .social-icon {
            cursor: pointer;
            transition: 0.3s;
            color: white;
            opacity: 0.8;
          }
          .social-icon:hover {
            transform: scale(1.2);
            opacity: 1;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Signup;
