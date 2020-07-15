import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/flower-1.jpg";
import "./Flower.css";
import PropTypes from "prop-types";

export default function Flower({ flower }) {
  const { name, specific, images, price, size } = flower;

  return (
    <article className="flower">
      <p className="flower-info">{name}</p>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="flower" />
        <div className="price-bottom">
          <h6>£{price}</h6>
          <p>per 1000 bulbs</p>
        </div>
        <Link to={`/flowers/${specific}`} className="btn-primary flower-link">
          Details
        </Link>
      </div>
      <p className="flower-info-bottom">Size: {size}</p>
    </article>
  );
}

Flower.propTypes = {
  flower: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specific: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
