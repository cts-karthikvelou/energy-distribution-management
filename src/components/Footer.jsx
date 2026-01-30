import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container-fluid px-10">
        <div className="row text-center text-md-start px-5">
          {/* Column 1: Company Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Industrial Energy</h5>
            <p className="small">
              Leading provider of sustainable energy solutions — solar, wind, and
              smart industrial power systems for a cleaner, greener tomorrow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-3 mb-4 px-5">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">AboutUs</a></li>
              {/* <li><a href="/services" className="text-light text-decoration-none">Services</a></li> */}
              <li><a href="/datascience" className="text-light text-decoration-none">OurAi</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">ContactUs</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Our Services</h6>
            <ul className="list-unstyled small">
              <li>Solar Power Installations</li>
              <li>Wind Energy Solutions</li>
              <li>Industrial Energy Audits</li>
              <li>Power System Maintenance</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact Us</h6>
            <p className="mb-1 small">
              <i className="bi bi-telephone"></i> +91 98765 43210
            </p>
            <p className="mb-1 small">
              <i className="bi bi-envelope"></i> support@industrialenergy.com
            </p>
            <p className="mb-0 small">
              <i className="bi bi-geo-alt"></i> Hyderabad, India
            </p>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Industrial Energy</strong> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
