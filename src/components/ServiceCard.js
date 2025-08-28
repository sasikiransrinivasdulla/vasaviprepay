import React from "react";
import { navigate } from "../router";
import "../styles/home.css";

export default function ServiceCard({
  iconClass,
  title,
  text,
  features = [],
  ctaText,
  to,
}) {
  return (
    <div className="svc-card">
      <i className={`svc-ic ${iconClass}`}></i>
      <h3>{title}</h3>
      <p className="muted">{text}</p>
      <ul className="svc-ul">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="cta" onClick={() => navigate(to)}>
        {ctaText}
      </button>
    </div>
  );
}
