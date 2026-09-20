import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./index.css";
import heroImage from "./assets/hero.png";

import FindAgricultureHelp from "./screens/FindAgricultureHelp";
import ConnectWithFarmers from "./screens/ConnectWithFarmers";
import StorageAndTransport from "./screens/StorageAndTransport";
import AskAboutCrop from "./screens/AskAboutCrop";
import SchemeDiscovery from "./screens/SchemeDiscovery";
import SchemeRecommendations from "./screens/SchemeRecommendations";

const services = [
  {
    
    icon: "*",
    title: "Find Agriculture Help",
    description:
      "Access verified government schemes, crop information, and agricultural resources in one place.",
    button: "Find Help",
    path: "/find-agriculture-help",
  },
  {
    
    icon: "*",
    title: "Connect with Farmers",
    description:
      "Find farmers growing similar crops and explore opportunities to collaborate.",
    button: "Explore Connections",
    path: "/connect-with-farmers",
  },
  {
    icon: "*",
    title: "Storage & Transport",
    description:
      "Submit a request for storage, transport, or other agricultural support.",
    button: "Request Support",
    path: "/storage-and-transport",
  },
];

function ArrowIcon() {
  return <span className="arrow">↗</span>;
}

// HOMEPAGE
function HomePage() {
  const [activePage, setActivePage] = useState("Home");
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setActivePage(page);

    if (page === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (page === "Find Help") {
      navigate("/find-agriculture-help");
    }

    if (page === "Connect") {
      navigate("/connect-with-farmers");
    }

    if (page === "My Requests") {
      navigate("/storage-and-transport");
    }

    if (page === "Storage & Transport") {
      navigate("/storage-and-transport");
    }
  };

  return (
    <div className="app">
      {/* NAVIGATION */}
      {/* <header className="navbar">
        <button
          className="brand"
          onClick={() => handleNavigation("Home")}
        >
          <span className="brand-mark">✳</span>
          <span>KrishiSahyog</span>
        </button>

        <nav className="nav-links">
          {["Home", "Find Help", "Connect", "My Requests"].map(
            (item) => (
              <button
                key={item}
                className={
                  activePage === item
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => handleNavigation(item)}
              >
                {item}
              </button>
            )
          )}
        </nav>

        <div className="nav-actions">
          <button className="language-button">
            हिं / EN⌄
          </button>

          <button className="account-button">
            My Account ↗
          </button>
        </div>
      </header> */}
      <header className="floating-navbar">
  <a href="/" className="brand">
    <span className="brand-symbol">✳</span>
    <span>KrishiSahyog</span>
  </a>

  <nav className="nav-links">
    <a href="/" className="nav-link active">
      Home
    </a>

    <a href="/find-agriculture-help" className="nav-link">
      Find Help
    </a>

    <a href="/connect-with-farmers" className="nav-link">
      Connect
    </a>

    <a href="/my-requests" className="nav-link">
      My Requests
    </a>
  </nav>

  <div className="nav-actions">
    <button className="language-button">
      हि / EN⌄
    </button>

    <button className="account-button">
      My Account ↗
    </button>
  </div>
</header>

      {/* HERO */}
      <main>
        <section className="hero">
          <img
            src={heroImage}
            alt="Agricultural fields viewed from above"
            className="hero-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-greeting">
              नमस्ते, किसान
            </p>

            <h1>
              What can we
              <br />
              help you with
              <br />
              today?
            </h1>

            <button
              className="hero-button"
              onClick={() => handleNavigation("Find Help")}
            >
              Find Help <ArrowIcon />
            </button>
          </div>

          <div className="hero-stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">
              Farmer connections
            </span>
            <span className="stat-location">
              Designed for Bharat
            </span>
          </div>

          <div className="hero-bottom-label">
            <span>01</span>
            <span>ACCESS • CONNECT • GROW</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="intro-section">
          <p className="section-eyebrow">
            FOR EVERY FIELD ✳
          </p>

          <h2>
            EVERY
            <br />
            FARMER
          </h2>

          <p className="intro-description">
            Farming is hard enough.
            <br />
            Finding help shouldn't be.
          </p>
        </section>

        {/* SERVICES */}
        <section
          className="services-section"
          id="services"
        >
          <div className="services-intro">
            <p className="small-label">
              YOUR NEXT STEPS
            </p>

            <p>
              Find useful agricultural information, connect
              with fellow farmers, and get support for what
              comes after harvest.
            </p>

            <button
              className="text-button"
              onClick={() => handleNavigation("Find Help")}
            >
              Explore all services <ArrowIcon />
            </button>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="card-top">
                  <span className="card-number">
                    {service.number}
                  </span>

                  <span className="card-icon">
                    {service.icon}
                  </span>
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <button
                  className="card-button"
                  onClick={() => navigate(service.path)}
                >
                  {service.button}
                  <ArrowIcon />
                </button>
              </article>
            ))}
          </div>
        </section>


        {/* RECENT REQUESTS */}
        <section className="requests-section">
          <div>
            <p className="small-label">
              KEEP TRACK OF WHAT MATTERS
            </p>

            <h2 className="requests-heading">
              Your requests,
              <br />
              all in one place.
            </h2>
          </div>

          <div className="request-box">
            <div className="request-box-top">
              <span className="request-label">
                RECENT REQUESTS
              </span>

              <span className="request-status">
                DEMO
              </span>
            </div>

            <h3>No requests yet</h3>

            <p>
              Your submitted support requests will appear
              here. You can track their progress from
              submission to resolution.
            </p>

            <button
              className="dark-button"
              onClick={() =>
                handleNavigation("My Requests")
              }
            >
              View My Requests <ArrowIcon />
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-brand">
            <span className="brand-mark">✳</span>
            <span>KrishiSahyog</span>
          </div>

          <p>
            Useful information. Clearer choices.
          </p>

          <span>
            © 2026 KrishiSahyog
          </span>
        </footer>
      </main>
    </div>
  );
}

// ROUTING
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/find-agriculture-help"
          element={<FindAgricultureHelp />}
        />
        <Route
          path="/scheme-discovery"
          element={<SchemeDiscovery />}
      />
        <Route
           path="/ask-about-crop"
            element={<AskAboutCrop />}
        />
        <Route
  path="/scheme-recommendations"
  element={<SchemeRecommendations />}
/>

        <Route
          path="/connect-with-farmers"
          element={<ConnectWithFarmers />}
        />

        <Route
          path="/storage-and-transport"
          element={<StorageAndTransport />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;