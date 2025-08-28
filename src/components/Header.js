import React, { useState } from "react";
import { navigate } from "../router";
import "../styles/home.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="container hdr-row">
        <button className="logo" onClick={() => navigate("/")}>
          <i className="fas fa-bolt logo-ic" aria-hidden></i>
          <span>Vasavi Pre Pay</span>
        </button>
        <button
          className="hamb"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <nav className={open ? "nav active" : "nav"}>
          <ul>
            <li>
              <button
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/admin");
                  setOpen(false);
                }}
              >
                Admin
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/store");
                  setOpen(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
