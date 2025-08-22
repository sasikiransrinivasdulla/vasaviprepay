import React from "react";
import { navigate } from "../router";
import "../styles/pages.css";


export default function BakeryPage() {
return (
<div className="page">
<div className="topbar">
<button className="back" onClick={() => navigate("/")}>← Back</button>
<div className="title">Bakery</div>
<div></div>
</div>


<section className="panel">
<h2>Popular Today</h2>
<ul className="list">
<li>Chicken Puff — ₹30</li>
<li>Veg Puff — ₹20</li>
<li>Egg Puff — ₹25</li>
<li>Sandwich — ₹65</li>
</ul>
</section>
</div>
);
}