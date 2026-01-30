import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/DetailsPage.css";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DetailsPage = () => {
  const location = useLocation();
  const energy = location.state?.energy;
  const backPage = location.state?.backPage || "/";

  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateBars(true), 300);
  }, []);

  if (!energy) {
    return (
      <div className="container text-center mt-5">
        <h2>No details found</h2>
        <Link to={backPage} className="btn btn-primary mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5 fade-in">

      {/* ========================= Hero Section ========================= */}
      <div
        className="hero-details position-relative text-center text-white mb-5"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #009e60, #006b3c)",
          position: "relative",
        }}
      >
        <div className="container position-relative z-2 px-3">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            {energy.name}
          </h1>
          <p className="fs-5 mt-3 opacity-75 animate__animated animate__fadeInUp">
            {energy.desc}
          </p>
        </div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(1px)",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* ==================== Image Section ==================== */}
      <div className="text-center mb-4 slide-up">
        <img
          src={energy.img}
          alt={energy.name}
          className="img-fluid rounded-4 shadow"
          style={{
            maxHeight: "380px",
            objectFit: "cover",
            animation: "fadeIn 1.2s ease"
          }}
        />
      </div>

      {/* ===================== Energy Rating ===================== */}
      <div className="card shadow-lg rounded-4 p-4 mb-4 slide-up">
        <h4 className="fw-bold text-success mb-3">Energy Rating</h4>

        <div
          style={{
            background: "#e9ecef",
            height: "22px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(energy.rating || 4) * 20}%`,
              height: "100%",
              background: "linear-gradient(90deg, #00c853, #009624)",
              transition: "width 0.8s ease",
            }}
          ></div>
        </div>

        <p className="mt-3 fw-bold text-success fs-5 text-center">
          Rating: {energy.rating || 4} / 5
        </p>

        <p className="text-muted text-center mt-2">
          This shows how efficient and eco-friendly the energy source is.
        </p>
      </div>

      {/* ====================== Energy Comparison ====================== */}
      <div className="card shadow-lg rounded-4 p-4 mb-4 slide-up">
        <h4 className="fw-bold text-success mb-4">Energy Comparison</h4>

        <div className="row text-center">
          {/* Power Efficiency */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold mb-3">⚡ Power Efficiency</h6>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Efficiency", value: energy.efficiency },
                    { name: "Remaining", value: 100 - energy.efficiency },
                  ]}
                  dataKey="value"
                  outerRadius={90}
                  innerRadius={45}
                  paddingAngle={3}
                  animationDuration={1000}
                  label
                  fill="#28a745"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <p className="fw-bold text-success fs-5 mt-2">
              {energy.efficiency}% Efficient
            </p>
          </div>

          {/* Environmental Impact */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold mb-3">🌍 Environmental Impact</h6>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Impact Score", value: energy.impact },
                    { name: "Remaining", value: 100 - energy.impact },
                  ]}
                  dataKey="value"
                  outerRadius={90}
                  innerRadius={45}
                  paddingAngle={3}
                  animationDuration={1000}
                  label
                  fill="#ffc107"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <p className="fw-bold text-warning fs-5 mt-2">
              {energy.impact}/100 Impact Score
            </p>
          </div>
        </div>
      </div>

      {/* ======== Advantages | Disadvantages | Examples ======== */}
      <div className="row g-4 mb-5 slide-up">
        <div className="col-md-4">
          <div className="card shadow rounded-4 p-4 h-100 card-advantages">
            <h4 className="fw-bold text-success">Advantages</h4>
            <ul className="mt-3">
              {energy.advantages?.map((adv, index) => (
                <li key={index}>{adv}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow rounded-4 p-4 h-100 card-disadvantages">
            <h4 className="fw-bold text-danger">Disadvantages</h4>
            <ul className="mt-3">
              {energy.disadvantages?.map((dis, index) => (
                <li key={index}>{dis}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow rounded-4 p-4 h-100 card-examples">
            <h4 className="fw-bold text-primary">Real-World Examples</h4>
            <ul className="mt-3">
              {energy.examples?.map((ex, index) => (
                <li key={index}>{ex}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-4 slide-up">
        <Link to={backPage} className="btn btn-outline-success px-4 rounded-pill">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
