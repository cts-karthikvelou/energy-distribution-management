import React, { useState } from "react";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "animate.css";
import logo from "../assets/logo.jpg";
import emailjs from '@emailjs/browser';

// Fix leaflet marker icons in React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// FIXED OFFICE LOCATION
const officePosition = [17.493986, 78.399744];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lnduyr5",
      "template_o2wic8d",
      e.target,
      "SEHhSCIpcuZIrIsaE"
    )
    .then(() => {
      setAlert({
        type: "success",
        message: "Message sent successfully!"
      });

      e.target.reset();

      setTimeout(() => setAlert(null), 3000);
    })
    .catch(() => {
      setAlert({
        type: "danger",
        message: "Failed to send message. Please try again."
      });

      setTimeout(() => setAlert(null), 3000);
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #16a085, #27ae60)",
          height: "50vh",
        }}
      >
        <div className="p-3 animate__animated animate__fadeInDown">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-2">
            Let’s connect and build a cleaner energy future.
          </p>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-5" style={{ background: "#f0f4f1" }}>
        <div className="container">

          {/* Header with Logo */}
          <div className="text-center mb-4">
            <img
              src={logo}
              alt="Company Logo"
              style={{
                height: "95px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
              className="animate__animated animate__zoomIn"
            />

            <h2 className="fw-bold text-success mt-4 animate__animated animate__fadeInDown">
              Get In Touch
            </h2>
            <p className="text-muted animate__animated animate__fadeInUp">
              Powering a sustainable future for industries worldwide.
            </p>
          </div>

          {/* Main Card */}
          <div
            className="rounded-4 shadow-lg p-4 p-md-5"
            style={{
              background: "white",
              border: "1px solid #e8eceb"
            }}
          >
            <div className="row g-5">

              {/* LEFT SIDE — FORM */}
            <div className="col-md-6">
  <h4 className="fw-bold text-success mb-4">Send us a message</h4>

  {/* 🔥 ALERT AT TOP OF THE FORM */}
  {alert && (
    <div
      className={`alert alert-${alert.type} mb-3 text-center animate__animated animate__fadeIn`}
    >
      {alert.message}
    </div>
  )}

  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label fw-semibold">Your Name</label>
      <input
        type="text"
        className="form-control form-control-lg rounded-3"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label className="form-label fw-semibold">Your Email</label>
      <input
        type="email"
        className="form-control form-control-lg rounded-3"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label className="form-label fw-semibold">Message</label>
      <textarea
        className="form-control form-control-lg rounded-3"
        rows="5"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>

    <button className="btn btn-success btn-lg w-100 fw-semibold rounded-3">
      Send Message
    </button>
  </form>
</div>

              {/* RIGHT SIDE — INFO + MAP */}
              <div className="col-md-6">
                <h4 className="fw-bold text-success mb-4">Our Office</h4>

                <div className="p-4 bg-light rounded-3 mb-4">
                  <p className="mb-2">
                    <FaClock className="text-success me-2" />
                    Mon–Fri: 9 AM – 6 PM | Sat: 10 AM – 4 PM
                  </p>
                  <p className="mb-2">
                    <FaPhoneAlt className="text-success me-2" />
                    +91-9876543210
                  </p>
                  <p className="mb-2">
                    <FaEnvelope className="text-success me-2" />
                    support@localbusiness.com
                  </p>
                  <p className="mb-0">
                    <FaMapMarkerAlt className="text-success me-2" />
                    Venkat Nagar, Bhagya Nagar Colony, Kukatpally, Hyderabad
                  </p>
                </div>

                <div
                  className="rounded-3 shadow-sm mb-3"
                  style={{ height: "260px", overflow: "hidden" }}
                >
                  <MapContainer
                    center={officePosition}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{ height: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={officePosition}>
                      <Popup>Our Office Location</Popup>
                    </Marker>
                  </MapContainer>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${officePosition[0]},${officePosition[1]}`}
                  target="_blank"
                  className="btn btn-outline-success w-100 fw-semibold rounded-3"
                >
                  🗺️ Get Directions
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
