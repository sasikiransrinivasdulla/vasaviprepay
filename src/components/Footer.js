import React from "react";
import { navigate } from "../router";
import "../styles/home.css";

export default function Footer() {
  return (
    <footer className="ftr ftr-compact">
      <div className="container">
        <div className="ftr-grid ftr-grid-compact">
          {/* Brand + Address */}
          <div className="fcol fcol-brand">
            <h3>Vasavi Pre Pay</h3>
            <p className="muted">
              Redefining campus convenience through simple pre-pay and quick
              service.
            </p>
            <p className="muted">
              Sri Vasavi Engineering College,
              <br />
              Pedatadepalli, Tadepalligudem – 534101,
              <br />
              West Godavari, Andhra Pradesh, India.
            </p>
          </div>

          {/* Useful: Quick Links */}
          <div className="fcol">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button onClick={() => navigate("/store")}>Campus Store</button>
              </li>
              <li>
                <button onClick={() => navigate("/bakery")}>
                  Bakery Pre-Order
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/admin")}>
                  Admin Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Useful: Contacts (developers) */}
          <div className="fcol">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:sasikiranworks@gmail.com">
                  sasikiranworks@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:varaprasaduppu552@gmail.com">
                  varaprasaduppu552@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy copy-compact">© 2025 Vasavi Pre Pay.</div>
      </div>
    </footer>
  );
}
