import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Images
import coal from "../assets/Coal.jpg";
import oil from "../assets/Oil.jpg";
import naturalGas from "../assets/Gas.jpg";
import nuclear from "../assets/Nuclear_Energy.jpg";
import uranium from "../assets/Uranium.jpg";
import minerals from "../assets/Minerals.jpg";

const NonRenewable = () => {
  const location = useLocation();
  const highlightedId = location.state?.selectedId || null;
  const [searchTerm, setSearchTerm] = useState("");

  const nonRenewableProjects = [
    {
      id: 1,
      name: "Coal Energy",
      img: coal,
      desc: "Coal is burned to generate steam for power production.",
      advantages: ["Cheap and widely available", "High energy output", "Used in steel and cement industries"],
      disadvantages: ["Very high pollution", "Mining destroys land", "Major CO₂ contributor"],
      examples: ["Thermal power plants", "Metallurgical industries"],
      rating: 1,
      efficiency: 70,
      impact: 98
    },
    {
      id: 2,
      name: "Oil (Petroleum)",
      img: oil,
      desc: "Oil is refined into fuels like petrol, diesel, kerosene.",
      advantages: ["Very high energy density", "Easy to transport", "Supports huge global infrastructure"],
      disadvantages: ["Major cause of air pollution", "Oil spills affect oceans", "Non-renewable resource"],
      examples: ["Petrol vehicles", "Aircraft fuel", "Power generators"],
      rating: 2,
      efficiency: 85,
      impact: 90
    },
    {
      id: 3,
      name: "Natural Gas",
      img: naturalGas,
      desc: "A fossil fuel used for heating, cooking, vehicles, and electricity.",
      advantages: ["Cleaner than coal and oil", "High efficiency", "Reliable supply network"],
      disadvantages: ["Still emits greenhouse gases", "Leakages are dangerous", "Non-renewable"],
      examples: ["PNG gas pipelines", "CNG vehicles", "Gas power plants"],
      rating: 3,
      efficiency: 90,
      impact: 60
    },
    {
      id: 4,
      name: "Nuclear Energy",
      img: nuclear,
      desc: "Energy released from nuclear fission in power reactors.",
      advantages: ["Huge power output", "Zero carbon emissions", "Reliable base load"],
      disadvantages: ["Radioactive waste", "Risk of accidents", "Very expensive plants"],
      examples: ["Kudankulam Nuclear Plant (India)", "Fukushima, Japan"],
      rating: 4,
      efficiency: 95,
      impact: 50
    },
    {
      id: 5,
      name: "Uranium Energy",
      img: uranium,
      desc: "Uranium fuel generates electricity through fission in nuclear reactors.",
      advantages: ["Extremely high energy density", "Small fuel amount needed", "Low greenhouse gas emissions", "Reliable 24/7 power source"],
      disadvantages: ["Produces radioactive waste", "Nuclear accidents risk", "Mining harms land and health", "High construction & maintenance cost"],
      examples: ["Uranium reactors worldwide", "Pressurized Water Reactors using U-235", "India’s Nuclear Plants using uranium oxide"],
      rating: 4,
      efficiency: 92,
      impact: 70
    },
    {
      id: 6,
      name: "Minerals",
      img: minerals,
      desc: "Minerals like uranium, thorium, and rare-earth elements are extracted for energy and technologies.",
      advantages: ["High energy output", "Essential for batteries, turbines, solar panels", "Long-term stability in energy supply", "Required for modern renewable tech components"],
      disadvantages: ["Mining causes land degradation & pollution", "Non-renewable and may deplete", "Extraction affects water resources", "Rare-earth mining creates toxic waste"],
      examples: ["Uranium in reactors", "Lithium in EV batteries", "Cobalt in battery storage", "Rare-earth metals in wind turbines"],
      rating: 3,
      efficiency: 65,
      impact: 85
    }
  ];

  // Filter projects based on search term
  const filteredProjects = nonRenewableProjects.filter(
    (energy) =>
      energy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      energy.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "linear-gradient(rgba(200,0,0,0.6), rgba(200,0,0,0.6)), url('https://images.unsplash.com/photo-1581092333821-3f86b0f45ab2?auto=format&fit=crop&w=1400&q=80')",
          height: "55vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // borderBottomLeftRadius: "60px",
          // borderBottomRightRadius: "60px",
        }}
      >
        <div>
          <h1 className="fw-bold display-4 animate__animated animate__fadeInDown">
            ⚠️ Non-Renewable Energy Sources
          </h1>
          <p className="mt-3 fs-5 opacity-75">
            Powerful but limited energy resources that impact our planet.
          </p>
        </div>
      </section>

      {/* Search Filter */}
      {/* <div className="container text-center my-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search energy types..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      {/* Highlighted Card */}
      {highlightedId && (
        <div className="text-center mt-3">
          <h5 className="fw-bold text-danger">
            Highlighted → {nonRenewableProjects.find(p => p.id === highlightedId)?.name}
          </h5>
        </div>
      )}

      {/* Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {filteredProjects.map((energy) => (
            <div key={energy.id} className="col-md-4">
              <div
                className={`card h-100 shadow border-0 rounded-4 ${
                  energy.id === highlightedId ? "border border-3 border-danger shadow-lg" : ""
                }`}
                style={{
                  overflow: "hidden",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  transform: energy.id === highlightedId ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={energy.img}
                  alt={energy.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h4 className="fw-bold text-danger">{energy.name}</h4>
                  <p className="text-secondary">{energy.desc}</p>
                  <Link
                    to="/details"
                    state={{ energy, backPage: "/nonrenewable" }}
                    className="btn btn-danger mt-2 px-4 rounded-pill"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-5">
          <Link to="/home" className="btn btn-outline-danger px-4 rounded-pill">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-danger text-white py-5 mt-5">
        <h3 className="fw-bold">Toward a Balanced Energy Future</h3>
        <p className="mt-2 fs-5">
          Smarter use of limited resources ensures a safer tomorrow.
        </p>
        <Link to="/contact" className="btn btn-light rounded-pill px-4 mt-3">
          Contact Us
        </Link>
      </section>
    </>
  );
};

export default NonRenewable;
