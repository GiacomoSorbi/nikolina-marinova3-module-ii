import React from "react";
import { useContext } from "react";
import { FlowerContext } from "../context";
import Title from "../components/Title";
import "./FlowerFilter.css";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function FlowerFilter({ flowers }) {
  const context = useContext(FlowerContext);
  const {
    handleChange,
    type,
    quantity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    cut,
    potted,
  } = context;
  // get unique types
  let types = getUnique(flowers, "type");
  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let pieces = getUnique(flowers, "quantity");
  pieces = pieces.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search flowers" />
      <form className="filter-form">
        {/*select type  */}
        <div className="form-group">
          <label htmlFor="type">flower bulb type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/*quantity per create   */}
        <div className="form-group">
          <label htmlFor="quantity">Quantity per crate</label>
          <select
            name="quantity"
            id="quantity"
            value={quantity}
            className="form-control"
            onChange={handleChange}
          >
            {pieces}
          </select>
        </div>
        {/* quantity per create  */}
        {/* flower price */}
        <div className="form-group">
          <label htmlFor="price">flower price £{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of flower price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">flower size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* Terms and Conditions  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="cut"
              id="cut"
              checked={cut}
              onChange={handleChange}
            />
            <label htmlFor="cut">cut flower bulbs</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="potted"
              id="potted"
              checked={potted}
              onChange={handleChange}
            />
            <label htmlFor="potted">potted flower bulbs</label>
          </div>
        </div>
        {/* end of Terms and Conditions  */}
      </form>
    </section>
  );
}
