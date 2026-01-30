import React from "react";
import heroImg from "../assets/Main.jpg" //use any image you like

const HeroSection = () => {
  return (
    <div
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        marginTop: "70px",
      }}
    >
      {/* Dark overlay for better text visibility */}
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
      <div style={{ position: "relative", zIndex: 2, maxWidth: "850px",padding: "0 20px", }}>
       <h1 className="display-5 fw-bold mb-3">
          Understanding Energy Today to Build a Sustainable Tomorrow
        </h1>
        <p className="lead mb-4">
          Learn how energy shapes our world — from renewable innovations to responsible usage — 
          and be part of the change.
        </p>
        {/* <button className="btn btn-success mt-2 px-4 py-2 fw-semibold">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
