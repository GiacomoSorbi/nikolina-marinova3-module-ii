import React from "react";
import "./Subtitle.css";

export default function Subtitle({ subtitle }) {
  return (
    <div className="section-subtitle">
      <p>{subtitle}</p>
      <div />
    </div>
  );
}
