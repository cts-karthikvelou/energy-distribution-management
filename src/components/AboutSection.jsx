import React from "react";

const AboutSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-success">
          About Our Energy Solutions
        </h2>
        <p className="text-center lead text-secondary-dark mx-auto" style={{ maxWidth: "800px" }}>
          We are dedicated to providing innovative, large-scale renewable energy
          solutions that drive sustainability, reduce carbon emissions, and
          empower industries to transition toward a cleaner and greener future.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
