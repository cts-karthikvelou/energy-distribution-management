import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove logged-in user
    localStorage.removeItem("currentUser");

    // Redirect after 1 sec
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, [navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f9b0f, #000000)",
        color: "white",
      }}
    >
      <h3>Logging out...</h3>
    </div>
  );
};

export default Logout;
