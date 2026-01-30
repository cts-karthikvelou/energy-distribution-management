import React, { useEffect } from "react";
import approachImg from "../assets/About.jpg";
import team1Img from "../assets/team1.jpg";
import team3Img from "../assets/team3.jpg";
import team2Img from "../assets/team2.jpg";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* 🌅 HEADER BANNER */}
      <div
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          background: "linear-gradient(135deg, #003366, #0072ff, #00c6ff)",
          height: "60vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.15), rgba(0,0,0,0.5))",
          }}
        ></div>

        <div style={{ position: "relative" }}>
          <h1 className="display-4 fw-bold scroll-fade scroll-fade-delay-1">
            About Us
          </h1>
          <p className="lead mt-3 fs-4 scroll-fade scroll-fade-delay-2">
            Innovating Sustainable Energy for a Greener Tomorrow
          </p>
        </div>
      </div>

<div
  style={{
    background: "linear-gradient(135deg, #eef7ff, #e7f3ff, #ffffff)",
    backgroundAttachment: "fixed",
    paddingTop: "40px",
    paddingBottom: "60px",
  }}
>
      {/* 🌟 MAIN QUOTE */}
      <div className="container text-center my-5 scroll-fade scroll-fade-delay-1">
        <h2 className="fw-bold mb-3" style={{ color: "#003366" }}>
          “Understanding energy today to build a sustainable tomorrow.”
        </h2>
        <p
          className="lead"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Learn how energy shapes our world — from renewable innovations to
          responsible usage — and be part of the change.
        </p>
      </div>

      {/* 🧩 WHO WE ARE */}
      <div className="container my-5 scroll-fade scroll-fade-delay-2">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#003366" }}>
          Who We Are
        </h2>
        <p
          className="text-center fs-5"
          style={{ maxWidth: "850px", margin: "0 auto", color: "#555" }}
        >
          We are a passionate team dedicated to shaping a cleaner energy future.
          Our mission blends innovation and sustainability, building renewable
          energy technologies that truly make an impact.
        </p>
      </div>

      {/* 🚀 OUR APPROACH SECTION */}
      <div className="container my-5 scroll-fade scroll-fade-delay-3">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src={approachImg}
              alt="Our Approach"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#003366" }}>
              Our Approach
            </h3>
            <p className="fs-5 text-muted">
              We merge research, technology, and community action to create
              impactful renewable energy systems. Every project is designed to
              support a greener, more sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* 🎯 MISSION & VISION */}
      <div
        className="container my-5"
        style={{ maxWidth: "1000px" }}
      >
        <div className="row text-center g-4">
          <div className="col-md-6 scroll-fade scroll-fade-delay-2">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              <h3 className="fw-bold" style={{ color: "#003366" }}>
                Our Mission
              </h3>
              <p className="fs-5 mt-2 text-muted">
                To empower communities with clean, reliable renewable energy
                solutions that help restore and protect our planet.
              </p>
            </div>
          </div>

          <div className="col-md-6 scroll-fade scroll-fade-delay-3">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              <h3 className="fw-bold" style={{ color: "#003366" }}>
                Our Vision
              </h3>
              <p className="fs-5 mt-2 text-muted">
                To become a global leader in sustainable technology and inspire
                eco-friendly practices across generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 💎 CORE VALUES */}
      <div className="container my-5 scroll-fade scroll-fade-delay-4">
        <h2 className="text-center fw-bold mb-4 " style={{ color: "#003366" }}>
          Our Core Values
        </h2>

        <div className="row text-center g-4 ">
          {[
            {
              title: "Innovation",
              text: "Creative solutions for modern energy challenges.",
            },
            {
              title: "Sustainability",
              text: "Eco-friendly systems for long-term impact.",
            },
            {
              title: "Integrity",
              text: "We work with honesty and transparency.",
            },
            {
              title: "Collaboration",
              text: "Together, we build a greener future.",
            },
          ].map((value, idx) => (
            <div className="col-md-3" key={idx}>
              <div
                className="p-4 rounded-4 shadow-sm h-100"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                <h5 className="fw-bold">{value.title}</h5>
                <p className="mt-2 text-muted">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 👥 TEAM SECTION */}
      <div className="container my-5 scroll-fade scroll-fade-delay-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#003366" }}>
          Meet Our Team
        </h2>

        <div className="row text-center g-5 justify-content-center">
          {[
            { img: team1Img, name: "Naveen", role: "Data Scientist" },
            { img: team3Img, name: "Maneesha", role: "Full Stack Developer" },
            { img: team2Img, name: "Aishwarya", role: "Data Scientist" },
          ].map((team, idx) => (
            <div className="col-md-3" key={idx}>
              <div
                className="p-4 rounded-4 shadow-sm"
                style={{
                  background: "white",
                  border: "1px solid #eee",
                  transition: "0.3s",
                }}
              >
                <img
                  src={team.img}
                  alt={team.name}
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #0072ff",
                  }}
                />
                <h5 className="fw-bold">{team.name}</h5>
                <p className="text-muted">{team.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
