import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match!" });
      setTimeout(() => setAlert(null), 4000);
      return;
    }
    setAlert({ type: "success", message: "Password reset successful!" });
    setTimeout(() => {
      setAlert(null);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4 rounded-4 animate__animated animate__fadeIn">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-circle" style={{ maxWidth: "120px" }} />
          <h3 className="fw-bold mt-3 text-success">Reset Password</h3>
        </div>

        {alert && <div className={`alert alert-${alert.type} text-center`}>{alert.message}</div>}

        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-success fw-semibold py-2">Reset Password</button>
          </div>
        </form>

        <div className="text-center mt-2">
          <Link to="/login" className="text-success text-decoration-none fw-semibold">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
