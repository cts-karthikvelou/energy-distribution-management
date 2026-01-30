import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, desc, icon, link }) => {
  const CardContent = () => (
    <div className="card shadow-lg h-100 border-0 hover-effect">
      <div className="card-body text-center">
        {icon && (
          <div className="mb-3">
            <i className={`bi ${icon} text-success fs-1`}></i>
          </div>
        )}
        <h5 className="card-title fw-bold text-success">{title}</h5>
        <p className="card-text text-secondary">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="col-md-4 mb-4">
      {link ? (
        <Link to={link} className="text-decoration-none text-dark">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default ServiceCard;
