// import React, { useState } from "react";
// import "./workflow.css";

// const resources = [
//   {
//     number: "01",
//     category: "GOVERNMENT SCHEMES",
//     title: "Explore Government Schemes",
//     description:
//       "Find agricultural schemes, support programs and useful government resources.",
//     action: "Explore Schemes",
//   },
//   {
//     number: "02",
//     category: "CROP INFORMATION",
//     title: "Understand Your Crop",
//     description:
//       "Access useful information about crops, farming practices and seasonal guidance.",
//     action: "View Information",
//   },
//   {
//     number: "03",
//     category: "DOCUMENTS",
//     title: "Eligibility & Documents",
//     description:
//       "Understand common eligibility requirements and documents before applying.",
//     action: "Check Requirements",
//   },
// ];

// export default function FindAgricultureHelp() {
//   const [search, setSearch] = useState("");

//   const filteredResources = resources.filter((resource) =>
//     `${resource.title} ${resource.description} ${resource.category}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   return (
//     <main className="workflow-page">
//       <section className="workflow-header">
//         <span className="workflow-label">
//           01 / AGRICULTURAL INFORMATION
//         </span>

//         <h1>
//           Find the help
//           <br />
//           you need.
//         </h1>

//         <p>
//           Find useful agricultural information, government schemes and
//           guidance to help you take your next step.
//         </p>

//         <input
//           className="workflow-search"
//           type="text"
//           placeholder="Search schemes, crops or documents..."
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//         />
//       </section>

//       <section className="workflow-grid">
//         {filteredResources.map((resource) => (
//           <article className="workflow-card" key={resource.number}>
//             <div className="workflow-card-top">
//               <span>{resource.number}</span>
//               <span className="workflow-tag">RESOURCE</span>
//             </div>

//             <small>{resource.category}</small>

//             <h2>{resource.title}</h2>

//             <p>{resource.description}</p>

//             <button
//               className="workflow-button"
//               onClick={() =>
//                 alert(
//                   "This resource section will be connected to verified government information."
//                 )
//               }
//             >
//               {resource.action}
//               <span>↗</span>
//             </button>
//           </article>
//         ))}
//       </section>

//       {filteredResources.length === 0 && (
//         <p className="empty-message">
//           No resources found. Try another search.
//         </p>
//       )}

//      
//     </main>
//   );
// }


// import { useState } from "react";
// import "./workflow.css";

// const resources = [
//   {
//     title: "Explore Government Schemes",
//     description:
//       "Find agricultural schemes, financial support, and useful government resources.",
//     button: "Explore Schemes",
//   },
//   {
//     title: "Understand Your Crop",
//     description:
//       "Access useful information about crops, farming practices, and seasonal guidance.",
//     button: "View Information",
//   },
//   {
//     title: "Eligibility & Documents",
//     description:
//       "Understand common eligibility requirements and documents before applying.",
//     button: "Check Requirements",
//   },
// ];

// function SearchIcon() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//     >
//       <circle cx="11" cy="11" r="7" />
//       <path d="m16 16 4 4" />
//     </svg>
//   );
// }

// function MicIcon() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//     >
//       <rect x="9" y="3" width="6" height="12" rx="3" />
//       <path d="M5 11a7 7 0 0 0 14 0" />
//       <path d="M12 18v3M8 21h8" />
//     </svg>
//   );
// }

// function ArrowIcon() {
//   return <span className="help-arrow">→</span>;
// }

// function FindAgricultureHelp() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredResources = resources.filter((resource) =>
//     `${resource.title} ${resource.description}`
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   const startVoiceSearch = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Voice search is not supported in this browser.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.start();

//     recognition.onresult = (event) => {
//       setSearchTerm(event.results[0][0].transcript);
//     };
//   };

//   return (
//     <div className="help-page">
//       <div className="help-container">

//         {/* HEADER */}
//         <section className="help-header">
//           <h1>
//             Find the help you need.
//           </h1>

//           <p>
//             Find useful agricultural information, government
//             schemes, and guidance to help you take your next step.
//           </p>
//         </section>

//         {/* SEARCH */}
//         <div className="help-search-wrapper">
//           <div className="help-search-icon">
//             <SearchIcon />
//           </div>

//           <input
//             type="text"
//             placeholder="Search schemes, crops or documents..."
//             value={searchTerm}
//             onChange={(event) =>
//               setSearchTerm(event.target.value)
//             }
//           />

//           <button
//             className="help-voice-button"
//             onClick={startVoiceSearch}
//             aria-label="Voice search"
//           >
//             <MicIcon />
//           </button>
//         </div>

//         {/* RESOURCE CARDS */}
//         <section className="help-cards">
//           {filteredResources.map((resource, index) => (
//             <article
//               className="help-card"
//               key={resource.title}
//             >
//               <div className="help-card-content">
//                 <h2>{resource.title}</h2>

//                 <p>{resource.description}</p>
//               </div>

//               <button className="help-card-button">
//                 {resource.button}
//                 <ArrowIcon />
//               </button>
//             </article>
//           ))}
//         </section>

//         {filteredResources.length === 0 && (
//           <p className="help-no-results">
//             No matching resources found.
//           </p>
//         )}

//       </div>
//     </div>
//   );
// }

// export default FindAgricultureHelp;


import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import "./workflow.css";

const API_URL = "http://127.0.0.1:3000";

export default function FindAgricultureHelp() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/schemes`)
      .then((response) => response.json())
      .then((result) => {
        setSchemes(result.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching schemes:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="workflow-page">
         <div className="page-back-button-wrapper">
        <BackButton fallback="/" />
      </div>
      <div className="workflow-header">
        <span className="eyebrow">AGRICULTURE SUPPORT</span>

        <h1>Find Agriculture Help</h1>

        <p>
          Explore useful resources, understand crop problems,
          and discover support for your farm.
        </p>
      </div>

      {/* TWO MAIN WORKFLOWS */}
      <div className="help-options">
        <article className="help-option-card">
          {/* <span className="resource-tag">01 · GOVERNMENT SUPPORT</span> */}

          <h2>Government Schemes</h2>

          <p>
            Discover government schemes and support programs
            designed to help farmers.
          </p>

          <button
  className="resource-button"
  onClick={() => navigate("/scheme-discovery")}
>
  Explore Schemes →
</button>
        </article>

        <article className="help-option-card">
          {/* <span className="resource-tag">02 · CROP SUPPORT</span> */}

          <h2>Crop Assistance</h2>

          <p>
            Share your crop problem and receive simple,
            preliminary guidance.
          </p>

          <button
            className="resource-button"
            onClick={() => navigate("/ask-about-crop")}
          >
            Get Crop Guidance →
          </button>
        </article>
      </div>

      {/* GOVERNMENT SCHEMES
      <section
        id="government-schemes"
        className="schemes-section"
      >
        <div className="section-heading">
          <span className="eyebrow">EXPLORE SUPPORT</span>

          <h2>Government Schemes</h2>

          <p>
            Explore available agricultural support resources.
          </p>
        </div>

        {loading ? (
          <p>Loading government resources...</p>
        ) : (
          <div className="resource-grid">
            {schemes.map((scheme) => (
              <div className="resource-card" key={scheme.id}>
                <span className="resource-tag">
                  Government Scheme
                </span>

                <h2>{scheme.title}</h2>

                <p>{scheme.description}</p>

                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noreferrer"
                  className="resource-button"
                >
                  Explore Official Source →
                </a>
              </div>
            ))}
          </div>
        )}
      </section> */}
    </div>
  );
}