import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./workflow.css";
import BackButton from "../components/BackButton";
const supportOptions = [
  {
    id: "storage",
    title: "Storage Support",
    description:
      "Find support for warehouses, godowns and cold storage facilities.",
  },
  {
    id: "transport",
    title: "Transportation",
    description:
      "Explore transport options and support for moving agricultural produce.",
  },
  {
    id: "both",
    title: "Storage & Transport",
    description:
      "Explore storage and transportation support together.",
  },
];

const schemes = [
  {
    id: "aif",
    type: "storage",
    category: "Storage infrastructure",
    title: "Agriculture Infrastructure Fund",
    description:
      "Financial support for eligible agricultural infrastructure, including warehouses and cold storage facilities.",
    support:
      "Loans, interest support and credit guarantee provisions may be available for eligible projects.",
    eligibility:
      "Farmers, farmer producer organisations, cooperatives, entrepreneurs and other eligible beneficiaries, subject to scheme guidelines.",
    documents: [
      "Identity proof",
      "Bank account details",
      "Project or infrastructure details",
      "Land or ownership documents, where applicable",
    ],
    steps: [
      "Review the current eligibility requirements.",
      "Prepare the required documents and project details.",
      "Contact an eligible lending institution or implementing authority.",
      "Complete the application through the official process.",
    ],
    link: "https://agriinfra.dac.gov.in/",
  },

  {
    id: "ami",
    type: "storage",
    category: "Warehouse support",
    title: "Agricultural Marketing Infrastructure",
    description:
      "Support for eligible agricultural godowns, warehouses and marketing infrastructure.",
    support:
      "Eligible projects may receive capital subsidy or other financial assistance under applicable guidelines.",
    eligibility:
      "Eligibility depends on the beneficiary category, project type, location and current scheme provisions.",
    documents: [
      "Identity and address proof",
      "Bank account details",
      "Project proposal",
      "Land and ownership-related documents, where applicable",
    ],
    steps: [
      "Check the applicable beneficiary and project requirements.",
      "Prepare the project proposal and supporting documents.",
      "Contact the relevant implementing authority.",
      "Complete the application through the official route.",
    ],
    link: "https://agriinfra.dac.gov.in/",
  },

  {
    id: "grain-storage",
    type: "storage",
    category: "Grain storage",
    title: "Warehouse and Grain Storage Support",
    description:
      "Explore storage infrastructure and warehousing options for agricultural produce.",
    support:
      "Support may include access to eligible warehousing infrastructure and related agricultural marketing facilities.",
    eligibility:
      "Eligibility depends on the facility, beneficiary category, location and applicable government guidelines.",
    documents: [
      "Identity proof",
      "Produce and storage details",
      "Bank account details",
      "Additional documents requested by the facility or authority",
    ],
    steps: [
      "Identify the required storage type and capacity.",
      "Contact an authorised warehouse or relevant department.",
      "Ask about availability, charges and eligibility.",
      "Confirm the required documents before proceeding.",
    ],
    link: "https://enam.gov.in/",
  },

  {
    id: "operation-greens",
    type: "transport",
    category: "Transport and market access",
    title: "Operation Greens",
    description:
      "Explore support related to the storage, transportation and marketing of eligible agricultural produce.",
    support:
      "Eligible post-harvest, logistics and value-chain activities may be covered under applicable guidelines.",
    eligibility:
      "Eligibility depends on the commodity, beneficiary type, project and current scheme provisions.",
    documents: [
      "Identity and beneficiary details",
      "Produce and transportation details",
      "Bank account information",
      "Relevant project or logistics documents",
    ],
    steps: [
      "Check whether your crop and activity are covered.",
      "Review the current scheme guidelines.",
      "Contact the relevant implementing agency.",
      "Submit the required documents through the official process.",
    ],
    link: "https://mofpi.gov.in/",
  },

  {
    id: "enam",
    type: "transport",
    category: "Market connectivity",
    title: "National Agriculture Market",
    description:
      "Explore digital agricultural market access and information that can help farmers connect with buyers.",
    support:
      "The platform provides market information, price discovery and digital trading-related facilities through participating markets.",
    eligibility:
      "Registration and access requirements may vary according to the participating market and user category.",
    documents: [
      "Identity proof",
      "Mobile number",
      "Bank account details, where required",
      "Farmer or trader registration details, where applicable",
    ],
    steps: [
      "Visit the official e-NAM portal.",
      "Check registration requirements.",
      "Complete the required registration process.",
      "Review available market information and facilities.",
    ],
    link: "https://enam.gov.in/",
  },

  {
    id: "agricultural-transport",
    type: "transport",
    category: "Agricultural transportation",
    title: "Agricultural Produce Transportation",
    description:
      "Explore official information about transportation facilities for agricultural produce.",
    support:
      "Available transportation options depend on the produce, route, service provider and current provisions.",
    eligibility:
      "Availability and eligibility vary according to the transportation service and applicable rules.",
    documents: [
      "Farmer or sender identification",
      "Produce details",
      "Quantity and destination information",
      "Booking or transport-related documents",
    ],
    steps: [
      "Identify the produce, quantity and destination.",
      "Check available transportation services and routes.",
      "Confirm charges, timings and documentation.",
      "Complete the booking or contact the relevant authority.",
    ],
    link: "https://indianrailways.gov.in/",
  },
];

function getVisibleSchemes(selectedType) {
  if (selectedType === "both") {
    return schemes;
  }

  return schemes.filter((scheme) => scheme.type === selectedType);
}

export default function StorageAndTransport() {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(null);
  const [expandedScheme, setExpandedScheme] = useState(null);

  const visibleSchemes = getVisibleSchemes(selectedType);

  const handleSupportSelect = (type) => {
    setSelectedType(type);
    setExpandedScheme(null);
  };

  const handleBack = () => {
    if (selectedType) {
      setSelectedType(null);
      setExpandedScheme(null);
    } else {
      navigate("/find-agriculture-help");
    }
  };

  const pageTitle =
    selectedType === "storage"
      ? "Storage Support"
      : selectedType === "transport"
        ? "Transportation Support"
        : selectedType === "both"
          ? "Storage & Transport"
          : "Storage & Transportation Support";

  return (
    <main className="workflow-page support-page">
        <div className="page-back-button-wrapper">
    <BackButton fallback="/find-agriculture-help" />
  </div>

      <div className="support-topbar">
        {/* <button className="back-button" onClick={handleBack}>
          ← Back
        </button> */}
      </div>

      <header className="workflow-header support-header">
        <span className="eyebrow">GOVERNMENT SUPPORT DIRECTORY</span>

        <h1>{pageTitle}</h1>

        <p>
          Find relevant support and understand the next steps.
        </p>
      </header>

      {!selectedType ? (
        <section className="support-selection">
          <div className="support-section-heading">
            <span className="eyebrow">FIND RELEVANT SUPPORT</span>

            <h2>What do you need help with?</h2>
          </div>

          <div className="support-option-grid">
            {supportOptions.map((option) => (
              <button
                key={option.id}
                className="support-option-card"
                onClick={() => handleSupportSelect(option.id)}
              >
                <div className="support-option-content">
                  <h3>{option.title}</h3>

                  <p>{option.description}</p>
                </div>

                <span className="support-option-link">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="scheme-directory">
          <div className="directory-intro">
            {/* <p>
              Explore the available support below. Open an option only
              when you want to check its eligibility and next steps.
            </p> */}
          </div>

          {visibleSchemes.map((scheme) => {
            const isExpanded = expandedScheme === scheme.id;

            return (
              <article
                className={`scheme-card ${
                  isExpanded ? "scheme-card-expanded" : ""
                }`}
                key={scheme.id}
              >
                <div className="scheme-card-header">
                  <p className="scheme-category">
                    {scheme.category}
                  </p>

                  <h2>{scheme.title}</h2>

                  <p className="scheme-description">
                    {scheme.description}
                  </p>
                </div>

                <div className="scheme-relevance">
                  <h3>What you should know</h3>

                  <p>{scheme.support}</p>
                </div>

                <button
                  className="scheme-action"
                  onClick={() =>
                    setExpandedScheme(isExpanded ? null : scheme.id)
                  }
                  aria-expanded={isExpanded}
                >
                  {isExpanded
                    ? "Close details ↑"
                    : "See eligibility and next steps →"}
                </button>

                {isExpanded && (
                  <div className="scheme-details">
                    <section>
                      <h3>Who may be eligible?</h3>

                      <p>{scheme.eligibility}</p>
                    </section>

                    <section>
                      <h3>Documents to keep ready</h3>

                      <ul>
                        {scheme.documents.map((document, index) => (
                          <li key={index}>{document}</li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3>How to proceed</h3>

                      <ol>
                        {scheme.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </section>

                    <div className="scheme-note">
                      Requirements may vary by state, beneficiary type
                      and current scheme guidelines. Confirm the latest
                      information through the official source.
                    </div>

                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noreferrer"
                      className="official-link"
                    >
                      Visit Official Source ↗
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}