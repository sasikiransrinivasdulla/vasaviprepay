import React from "react";
import { navigate } from "../router";
import "../styles/home.css";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-grid">
          <div className="fcol">
            <h3>Vasavi Pre Pay</h3>
            <p className="muted">
              Redefining campus convenience through simple pre-pay and quick
              service.
            </p>
            <p className="muted">
              <strong>College Address:</strong>
              <br />
              Sri Vasavi Engineering College,
              <br />
              Pedatadepalli, Tadepalligudem – 534 101,
              <br />
              West Godavari District, Andhra Pradesh, India.
            </p>
          </div>
          <div className="fcol">
            <h3>Services</h3>
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
          <div className="fcol">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h3>Developers</h3>
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
        <div className="copy">© 2025 Vasavi Pre Pay.</div>
      </div>
    </footer>
  );
}
