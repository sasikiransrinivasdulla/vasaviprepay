import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

export default function BakeryPage() {
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="panel">
          <h2>Bakery</h2>
          <ul className="list">
            <li>Chicken Puff — ₹25</li>
            <li>Veg Puff — ₹20</li>
            <li>Egg Puff — ₹25</li>
            <li>Sandwich — ₹35</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
