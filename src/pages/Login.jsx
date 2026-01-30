import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔥 Firebase Imports
import { auth, provider, signInWithPopup } from "../firebase";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // ------------------------------------------------
  // ✅ REAL GOOGLE LOGIN
  // ------------------------------------------------
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      setAlert({ type: "success", message: "Google Login Successful!" });

      // Save user
      localStorage.setItem("currentUser", JSON.stringify(user));

      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      console.log("GOOGLE LOGIN ERROR =>",error);
      setAlert({ type: "danger", message: "Google Login Failed!" });
      setAlert({ type: "danger", message: error.message });
    }
  };

  // ------------------------------------------------
  // ❌ Facebook Login – not setup yet
  // ------------------------------------------------
  const facebookLogin = () => {
    alert("Facebook login not enabled yet!");
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem(formData.email));

  if (user && user.password === formData.password) {
    setAlert({ type: "success", message: "Login Successful!" });

    localStorage.setItem("currentUser", JSON.stringify(user));

    // 🔥 After login → go to OurAi page
    setTimeout(() => navigate("/datascience"), 1000);
  } else {
    setAlert({ type: "danger", message: "Invalid Email or Password" });
    setTimeout(() => setAlert(null), 3000);
  }
};


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f9b0f, #000000)",
        padding: "20px",
      }}
    >
      <div
        className="p-5 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "430px",
          borderRadius: "20px",
          backdropFilter: "blur(14px)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff",
        }}
      >
        <h2 className="text-center fw-bold mb-4">Login</h2>

        {alert && (
          <div className={`alert alert-${alert.type} text-center`}>
            {alert.message}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-floating mb-4 position-relative">
            <input
              type="email"
              className="form-control rounded-4 ps-5"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "none",
              }}
            />
            <label>Email</label>
            <FaEnvelope className="position-absolute top-50 ms-3 translate-middle-y text-white opacity-75" />
          </div>

          {/* Password */}
          <div className="form-floating mb-4 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-4 ps-5"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "none",
              }}
            />
            <label>Password</label>

            <FaLock className="position-absolute top-50 ms-3 translate-middle-y text-white opacity-75" />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold py-2 mt-2"
            style={{
              background: "linear-gradient(90deg, #198754, #28a745)",
              borderRadius: "30px",
              color: "#fff",
              border: "none",
            }}
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        {/* <div className="text-center mt-4">
          <p className="opacity-75">Or login with</p>

          <div className="d-flex justify-content-center gap-4">
            {/* Google Login */}
            {/* <FaGoogle
              size={28}
              className="social-icon"
              onClick={googleLogin}
              title="Google Login"
            /> */}

            {/* Facebook Login */}
            {/* <FaFacebook
              size={28}
              className="social-icon"
              onClick={facebookLogin}
              title="Facebook Login"
            />
          </div>
        </div> */} 

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Signup
          </span>
        </p>
      </div>

      {/* Social Icon Hover CSS */}
      <style>{`
        .social-icon {
          cursor: pointer;
          transition: 0.3s;
          color: white;
          opacity: 0.85;
        }
        .social-icon:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Login;
