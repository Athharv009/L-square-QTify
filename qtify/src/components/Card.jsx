import React from "react";
import "./Card.css";

function Card({ image, follows, title }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <span className="follows">{follows} Follows</span>
      <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
