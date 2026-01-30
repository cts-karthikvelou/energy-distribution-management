import React from "react";

const Services = () => {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="d-flex align-items-center justify-content-center text-center text-white mt-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505739772196-3bd10f030b9a?auto=format&fit=crop&w=1600&q=80')",
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div className="p-3" style={{ position: "relative" }}>
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead mt-2">Powering the world with sustainable energy solutions</p>
        </div>
      </div>

      {/* ===== Intro Section ===== */}
      <div className="container text-center my-5">
        <h2 className="fw-bold mb-3">What We Offer</h2>
        <p className="lead text-muted text-dark">
          From renewable energy solutions to efficient power management systems, we deliver innovation that helps communities and industries thrive sustainably.
        </p>
      </div>

      {/* ===== Services Cards ===== */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Solar Installation */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Solar Installation"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-warning">Solar Power Solutions</h5>
                <p className="text-muted">
                  We design and implement solar systems for homes and industries — reducing costs and carbon footprint.
                </p>
              </div>
            </div>
          </div>

          {/* Wind Energy */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Wind Energy"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-success">Wind Energy Projects</h5>
                <p className="text-muted">
                  Harnessing wind to generate clean, renewable power through advanced turbine technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Hydropower */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Hydropower"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Hydropower Systems</h5>
                <p className="text-muted">
                  We develop sustainable water-based energy systems with minimal environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Biomass */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1574169208507-8437617486e0?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Biomass Energy"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-success">Biomass Energy</h5>
                <p className="text-muted">
                  Turning organic materials into efficient energy — promoting waste reduction and sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Development */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="R&D"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-info">Research & Development</h5>
                <p className="text-muted">
                  Innovating new energy technologies to ensure cleaner and more reliable global energy access.
                </p>
              </div>
            </div>
          </div>

          {/* Energy Consultation */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Consulting"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold text-danger">Energy Consultation</h5>
                <p className="text-muted">
                  Helping industries and communities plan sustainable energy systems and reduce dependency on fossil fuels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Call to Action ===== */}
      <section className="text-center bg-dark text-white py-5 mt-5">
        <h3 className="fw-bold">Let’s Build a Greener Future Together</h3>
        <p className="mt-3">
          Partner with us to create innovative, eco-friendly energy solutions for the world.
        </p>
        <a href="/contact" className="btn btn-light mt-3">
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Services;
