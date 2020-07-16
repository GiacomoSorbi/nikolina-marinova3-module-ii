import React from "react";
import Flower from "./Flower";
import "./FlowerList.css";

export default function FlowerList({ flowers }) {
  if (flowers.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no flower bulbs matched your search criteria</h3>
      </div>
    );
  }
  return (
    <section className="flowerslist">
      <div className="flowerslist-center">
        {flowers.map((item) => {
          return <Flower key={item.id} flower={item} />;
        })}
      </div>
    </section>
  );
}
