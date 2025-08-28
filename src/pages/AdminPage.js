import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="panel">
          <h2>Admin Dashboard</h2>
          <p className="muted">
            Placeholder page. Add charts and tables later.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
