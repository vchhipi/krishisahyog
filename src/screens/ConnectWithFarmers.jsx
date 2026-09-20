import { useState } from "react";
import "./workflow.css";

const farmers = [
  {
    name: "Rajesh Kumar",
    crop: "Millet Farmer",
    location: "Jodhpur, Rajasthan",
    icon: "👤",
  },
  {
    name: "Sunita Devi",
    crop: "Mustard Farmer",
    location: "Hisar, Haryana",
    icon: "👤",
  },
  {
    name: "Amit Singh",
    crop: "Wheat Farmer",
    location: "Ludhiana, Punjab",
    icon: "👤",
  },
  {
    name: "Meena Kumari",
    crop: "Cotton Farmer",
    location: "Bikaner, Rajasthan",
    icon: "👤",
  },
];

function ConnectWithFarmers() {
  const [location, setLocation] = useState("");
  const [crop, setCrop] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  const filteredFarmers = farmers.filter((farmer) => {
    const locationMatch = farmer.location
      .toLowerCase()
      .includes(location.toLowerCase());

    const cropMatch = farmer.crop
      .toLowerCase()
      .includes(crop.toLowerCase());

    return (
      (!location || locationMatch) &&
      (!crop || cropMatch)
    );
  });

  return (
    <div className="help-page connect-page">
      <div className="help-container">

        {/* HEADER */}
        <section className="help-header connect-header">
          <h1>
            Connect with
            <br />
            farmers.
          </h1>

          <p>
            Discover farmers, exchange knowledge, and build
            meaningful connections across agricultural communities.
          </p>
        </section>

        {/* SEARCH CARD */}
        <form
          className="farmer-search-card"
          onSubmit={handleSearch}
        >
          <div className="farmer-search-heading">
            <span>Find your community</span>
            <span className="search-dot">✳</span>
          </div>

          <div className="farmer-fields">
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
            />

            <select
              value={crop}
              onChange={(event) =>
                setCrop(event.target.value)
              }
            >
              <option value="">Select crop</option>
              <option value="millet">Millet</option>
              <option value="wheat">Wheat</option>
              <option value="organic">Organic</option>
              <option value="vegetable">Vegetables</option>
            </select>
          </div>

          <button
            type="submit"
            className="farmer-search-button"
          >
            Find Farmers
            <span>→</span>
          </button>
        </form>

        {/* FEATURED FARMERS */}
        <section className="featured-farmers">
          <div className="farmers-section-heading">
            <div>
              <span className="farmers-eyebrow">
                COMMUNITY
              </span>

              <h2>Featured farmers</h2>
            </div>

            <span className="farmers-count">
              {filteredFarmers.length} profiles
            </span>
          </div>

          <div className="farmer-grid">
            {filteredFarmers.map((farmer) => (
              <article
                className="farmer-profile-card"
                key={farmer.name}
              >
                <div className="farmer-details">
                  <h3>{farmer.name}</h3>

                  <p>{farmer.crop}</p>

                  <span className="farmer-connect-link">
                    View profile →
                  </span>
                </div>

                <div className="farmer-photo-wrapper">
                <div className="profile-icon">
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Farmer profile"
  >
    <circle
      cx="32"
      cy="21"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />

    <path
      d="M13 53c0-11 8-19 19-19s19 8 19 19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    
  </svg>
</div>


                  <span className="farmer-location">
                    {farmer.location}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {showResults && filteredFarmers.length === 0 && (
            <p className="farmer-no-results">
              No farmers found. Try another location or crop.
            </p>
          )}
        </section>

      </div>
    </div>
  );
}

export default ConnectWithFarmers;