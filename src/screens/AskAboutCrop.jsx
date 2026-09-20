import { useState } from "react";
import "./workflow.css";
import BackButton from "../components/BackButton";

export default function AskAboutCrop() {
  const [crop, setCrop] = useState("");
  const [problem, setProblem] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!crop.trim() || !problem) {
      alert("Please select your crop and problem.");
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch(
        `http://127.0.0.1:3000/crop-guidance?crop=${encodeURIComponent(
          crop
        )}&problem=${encodeURIComponent(problem)}`
      );

      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the agriculture assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="workflow-page">
        <div className="page-back-button-wrapper">
    <BackButton fallback="/find-agriculture-help" />
  </div>

      <div className="workflow-header">
        

        <h1>Crop Assistance</h1>

        <p>
          Tell us about your crop and we'll help you understand the problem.
        </p>
      </div>

      <form className="crop-form" onSubmit={handleSubmit}>
        <label>Which crop are you growing?</label>

        <input
          type="text"
          placeholder="e.g. Bajra, Wheat, Rice"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />

        <label>What problem are you facing?</label>

        <select
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          <option value="">Select a crop problem</option>
          <option value="yellow leaves">Yellow leaves</option>
          <option value="insects">Insects</option>
          <option value="wilting">Wilting</option>
        </select>

        <button type="submit" className="resource-button">
          {loading ? "Checking..." : "Get Guidance →"}
        </button>
      </form>

      {/* COMBINED QUERY + GUIDANCE CARD */}
      {results.length > 0 && (
        <div className="resource-grid">
          {results.map((item) => (
            <article className="resource-card" key={item.id}>
              <span className="resource-tag">YOUR CROP QUERY</span>

              <h3>{crop}</h3>

              <p>
                Problem: <strong>{problem}</strong>
              </p>

              <div className="guidance-divider"></div>

              <h2>{item.title}</h2>

              <p>{item.guidance}</p>

              {item.possibleCauses?.length > 0 && (
                <>
                  <h3>Possible Causes</h3>

                  <ul className="guidance-list">
                    {item.possibleCauses.map((cause, index) => (
                      <li key={index}>{cause}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.steps?.length > 0 && (
                <>
                  <h3>What You Can Check</h3>

                  <ul className="guidance-list">
                    {item.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.warning && (
                <div className="guidance-warning">
                  <strong>Important:</strong> {item.warning}
                </div>
              )}

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="resource-button"
              >
                Consult Agriculture Resources ↗
              </a>
            </article>
          ))}
        </div>
      )}

      {!loading && crop && problem && results.length === 0 && (
        <p className="empty-state">
          No matching guidance found. Try another problem or consult a local
          agriculture expert.
        </p>
      )}
    </section>
  );
}