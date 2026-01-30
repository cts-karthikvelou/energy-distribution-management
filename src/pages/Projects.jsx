import React from "react";
import { useNavigate } from "react-router-dom";
import solar from "../assets/Solar Energy.jpg";
import wind from "../assets/Wind Energy.jpg";
import hydro from "../assets/Hydro Energy.jpg";
import biomass from "../assets/Biomass Energy.jpg";
import ocean from "../assets/Ocean Energy.jpg";
import geothermal from "../assets/geothermal.jpg";
import coal from "../assets/coal.jpg";
import oil from "../assets/oil.jpg";
import gas from "../assets/gas.jpg";
import nuclear from "../assets/Nuclear Energy.jpg";
import uranium from "../assets/uranium.jpg";
import minerals from "../assets/Minerals.jpg";

const Projects = () => {
  const navigate = useNavigate();

  const renewable = [
    { id: 1, name: "Solar Energy", img: solar },
    { id: 2, name: "Wind Energy", img: wind },
    { id: 3, name: "Hydropower", img: hydro },
    { id: 4, name: "Biomass Energy", img: biomass },
    { id: 5, name: "Geothermal Energy", img: geothermal },
    { id: 6, name: "Ocean Energy", img: ocean },
  ];

  const nonrenewable = [
    { id: 1, name: "Coal Energy", img: coal },
    { id: 2, name: "Oil Energy", img: oil },
    { id: 3, name: "Natural Gas", img: gas },
    { id: 4, name: "Nuclear Energy", img: nuclear },
    { id: 5, name: "Uranium", img: uranium },
    { id: 6, name: "Minerals", img: minerals },
  ];

  return (
    <>
      {/* ===== Hero Section ===== */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "50vh",
          // ✅ Changed banner to Wind Energy image from Unsplash
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          marginTop: "50px",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        ></div>

        {/* Text content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "850px",
            padding: "0 20px",
          }}
        >
          <h1 className="display-5 fw-bold mb-3">Our Energy Projects</h1>
          <p className="lead mb-4">
            Explore renewable and non-renewable energy sources shaping a
            sustainable future for our planet.
          </p>
        </div>
      </div>

      {/* ===== Renewable Projects ===== */}
      <div className="container my-5">
        <h2 className="text-success fw-bold text-center mb-4">
          Renewable Energy Projects
        </h2>
        <div className="row g-4">
          {renewable.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold text-success">{item.name}</h5>
                  <p className="small text-muted mb-3">
                    Clean, sustainable energy for a greener planet.
                  </p>
                  <button
                    onClick={() => navigate(`/renewable/${item.id}`)}
                    className="btn btn-outline-success"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Non-Renewable Projects ===== */}
        <h2 className="text-danger fw-bold text-center mt-5 mb-4">
          Non-Renewable Energy Projects
        </h2>
        <div className="row g-4">
          {nonrenewable.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold text-danger">{item.name}</h5>
                  <p className="small text-muted mb-3">
                    Essential but limited resources powering industries.
                  </p>
                  <button
                    onClick={() => navigate(`/nonrenewable/${item.id}`)}
                    className="btn btn-outline-danger"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <section className="text-center bg-dark text-white py-5 mt-5">
        <h3 className="fw-bold">Together Toward a Sustainable Future</h3>
        <p className="mt-3">
          Let’s balance renewable innovation with responsible resource use.
        </p>
        <a href="/contact" className="btn btn-light mt-3">
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Projects;
