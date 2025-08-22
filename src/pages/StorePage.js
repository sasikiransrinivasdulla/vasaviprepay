import React from "react";
import { navigate } from "../router";
import "../styles/pages.css";


export default function StorePage() {
return (
<div className="page">
<div className="topbar">
<button className="back" onClick={() => navigate("/")}>← Back</button>
<div className="title">Store</div>
<div></div>
</div>


<section className="panel">
<h2>Services</h2>
<ul className="list">
<li>PDF Printing — ₹2 per page</li>
<li>Notebooks — ₹45</li>
<li>Pens & Pencils — ₹15</li>
<li>Other stationery items</li>
</ul>
</section>
</div>
);
}