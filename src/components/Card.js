import React from "react";
import "../styles/home.css";


export default function Card({ title, subtitle, list = [], ctaLabel, onClick, tone = "blue", icon = "🍪" }) {
const toneClass = tone === "orange" ? "card-cta orange" : "card-cta blue";
const badgeClass = tone === "orange" ? "badge orange" : "badge blue";
return (
<div className="card">
<div className="card-icon" aria-hidden>{icon}</div>
<h3 className="card-title">{title}</h3>
<p className="card-sub">{subtitle}</p>


<div className={`badge-box ${badgeClass}`}>
<div className="badge-title">Highlights</div>
<ul className="badge-list">
{list.map((t, i) => (
<li key={i}>{t}</li>
))}
</ul>
</div>


<button className={toneClass} onClick={onClick}>{ctaLabel}</button>
</div>
);
}