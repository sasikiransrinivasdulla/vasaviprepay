import React, { useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import "../styles/home.css";

export default function Home() {
  // fade-in animation when cards scroll into view (simple)
  useEffect(() => {
    const cards = document.querySelectorAll(".svc-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-in">
          <h1>Redefining Campus Convenience</h1>
          <p>
            Seamless pre-payments for your campus needs. From stationery to
            fresh food.
          </p>
          <a className="cta" href="#services">
            Explore Services
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2 className="title">Our Services</h2>
          <div className="svc-grid">
            <ServiceCard
              iconClass="fas fa-print"
              title="Campus Store"
              text="Pre-pay for stationery and upload PDFs for printing."
              features={[
                "PDF printing",
                "Wide stationery",
                "Skip queues",
                "Digital receipts",
              ]}
              ctaText="Visit Store"
              to="/store"
            />
            <ServiceCard
              iconClass="fas fa-utensils"
              title="Bakery Pre-Order"
              text="Pre-order snacks and meals. Pick up on time."
              features={[
                "Order anywhere",
                "Many options",
                "Custom orders",
                "Scheduled pickup",
              ]}
              ctaText="Order Bakery"
              to="/bakery"
            />
            <ServiceCard
              iconClass="fas fa-chart-line"
              title="Admin Dashboard"
              text="Monitor and manage orders and transactions."
              features={["Real-time stats", "Transactions", "Users", "Reports"]}
              ctaText="Admin Portal"
              to="/admin"
            />
          </div>
        </div>
      </section>

      <section className="soon">
        <div className="container soon-in">
          <div className="hammer">
            <i className="fas fa-hammer"></i>
          </div>
          <h2>Enhanced Experience Coming Soon</h2>
          <p>
            We are adding more features and making things smoother. Stay tuned.
          </p>
          <a className="cta" href="#">
            Notify Me
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
