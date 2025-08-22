import React from "react";
import Card from "../components/Card";
import { navigate } from "../router";
import "../styles/home.css";


export default function Home() {
return (
<div className="page">
<header className="header">
<h1>Welcome to Vasavi Pre Pay</h1>
<p>Simple pre-pay for bakery and store</p>
</header>


<div className="cards">
<Card
title="Bakery"
subtitle="See items and pay in advance"
list={["Get The Food Hot", "EAT SLEEP REPEAT"]}
ctaLabel="Order Bakery"
onClick={() => navigate("/bakery")}
tone="blue"
icon="🥐"
/>


<Card
title="Store"
subtitle="Upload PDFs and buy stationery"
list={["Print Before U Reach", "Get a Free Choci-Choci"]}
ctaLabel="Visit Store"
onClick={() => navigate("/store")}
tone="orange"
icon="🧾"
/>
</div>


<div className="features">
<Feature label="24/7" sub="Available" />
<Feature label="Fast" sub="Service" />
<Feature label="₹0" sub="Extra Fees" />
<Feature label="Safe" sub="Payments" />
</div>
</div>
);
}


function Feature({ label, sub }) {
return (
<div className="feature">
<div className="feature-top">{label}</div>
<div className="feature-sub">{sub}</div>
</div>
);
}