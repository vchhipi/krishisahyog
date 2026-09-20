import { useLocation, useNavigate } from "react-router-dom";
import "./workflow.css";

export default function SchemeRecommendations() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const answers = state?.answers || {};
  const isKccRelevant =
  answers.need === "financial" &&
  ["owner", "tenant"].includes(answers.landStatus);
  return (
    <div className="workflow-page recommendations-page">
      <div className="workflow-header">
        <span className="eyebrow">YOUR PERSONALIZED SUPPORT</span>

        <h1>Support for your farm 🌾</h1>

        <p>
          Based on your answers, this scheme may be relevant
          to your farming needs.
        </p>
      </div>

      {isKccRelevant ? (
  <div className="recommendation-card">
    <span className="resource-tag">POTENTIALLY RELEVANT</span>

    <h2>Kisan Credit Card (KCC)</h2>

    <p className="recommendation-intro">
      KCC may help eligible farmers access credit
      for cultivation and agricultural needs.
    </p>

    <div className="recommendation-section">
      <h3>Why this may help</h3>
      <p>
        You selected financial assistance and indicated
        that you own or lease farmland.
      </p>
    </div>

    <div className="recommendation-section">
      <h3>Eligibility to verify</h3>
      <ul>
        <li>Owner cultivators may be eligible.</li>
        <li>Tenant farmers may be eligible.</li>
        <li>Bank-specific conditions may apply.</li>
      </ul>
    </div>

    <div className="recommendation-section">
      <h3>Documents commonly needed</h3>
      <ul>
        <li>Identity proof (Aadhar, VoterID)</li>
        <li>Address proof</li>
        <li>Landholding or tenancy documents</li>
        <li>Crop details</li>
      </ul>
    </div>

    <div className="recommendation-section">
      <h3>How to proceed</h3>
      <ol>
        <li>Visit a participating bank.</li>
        <li>Ask for the KCC application.</li>
        <li>Submit the required documents.</li>
        <li>Wait for verification and approval.</li>
      </ol>
    </div>

    <p className="recommendation-note">
      This is a preliminary recommendation.
      The bank will verify your eligibility.
    </p>

    <a
      className="resource-button"
      href="https://www.myscheme.gov.in/schemes/kcc"
      target="_blank"
      rel="noreferrer"
    >
      View Official Scheme Details →
    </a>
  </div>
) : (
  <div className="recommendation-card">
    <h2>No exact match yet</h2>

    <p>
      We couldn't find a matching scheme in our current
      demo catalogue. Please explore the available
      government schemes for more support.
    </p>
  </div>
)}

      <button
        className="text-button"
        onClick={() => navigate("/find-agriculture-help")}
      >
        ← Back to Agriculture Help
      </button>
    </div>
  );
}