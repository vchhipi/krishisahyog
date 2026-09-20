import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./workflow.css";

const questions = [
  {
    id: "need",
    question: "What kind of support do you need?",
    subtitle: "Choose the area where you need the most help.",
    options: [
      { value: "financial", label: "Financial Assistance", icon: "💰" },
      { value: "irrigation", label: "Irrigation & Water", icon: "💧" },
      { value: "insurance", label: "Crop Insurance", icon: "🛡️" },
      { value: "equipment", label: "Farming Equipment", icon: "🚜" },
      { value: "storage", label: "Storage & Selling", icon: "🌾" },
    ],
  },
  {
    id: "state",
    question: "Which state do you farm in?",
    subtitle: "This helps us identify relevant regional support.",
    options: [
      { value: "Punjab", label: "Punjab", icon: "📍" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh", icon: "📍" },
      { value: "Rajasthan", label: "Rajasthan", icon: "📍" },
      { value: "Maharashtra", label: "Maharashtra", icon: "📍" },
      { value: "Other", label: "Other State", icon: "🌍" },
    ],
  },
  {
    id: "landStatus",
    question: "What is your land ownership status?",
    subtitle: "Choose the option that best describes your situation.",
    options: [
      { value: "owner", label: "I own the land", icon: "🌱" },
      { value: "tenant", label: "I lease the land", icon: "🤝" },
      { value: "worker", label: "I work on someone else's farm", icon: "👨‍🌾" },
      { value: "unknown", label: "I'm not sure", icon: "❔" },
    ],
  },
  {
    id: "crop",
    question: "What do you primarily grow?",
    subtitle: "Select the crop closest to your farming activity.",
    options: [
      { value: "rice", label: "Rice", icon: "🌾" },
      { value: "wheat", label: "Wheat", icon: "🌾" },
      { value: "millets", label: "Millets", icon: "🌿" },
      { value: "vegetables", label: "Vegetables", icon: "🥬" },
      { value: "other", label: "Other Crop", icon: "🌱" },
    ],
  },
  {
    id: "landSize",
    question: "How much land do you farm?",
    subtitle: "An approximate answer is completely fine.",
    options: [
      { value: "small", label: "Less than 1 hectare", icon: "🌱" },
      { value: "medium", label: "1–2 hectares", icon: "🌿" },
      { value: "large", label: "2–5 hectares", icon: "🌳" },
      { value: "veryLarge", label: "More than 5 hectares", icon: "🌾" },
      { value: "unknown", label: "I'm not sure", icon: "❔" },
    ],
  },
];

export default function SchemeDiscovery() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];

  function handleSelect(value) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((previous) => previous + 1);
      }, 250);
    } else {
      setTimeout(() => {
        setCompleted(true);
      }, 250);
    }
  }

  function handlePrevious() {
    if (completed) {
      setCompleted(false);
      setCurrentQuestion(questions.length - 1);
    } else if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  }

  function restart() {
    setAnswers({});
    setCurrentQuestion(0);
    setCompleted(false);
  }

  if (completed) {
    return (
      <div className="workflow-page discovery-page">
        <div className="workflow-header">
          <span className="eyebrow">YOUR FARMER PROFILE</span>

          <h1>You're all set.</h1>

          <p>
            We've collected your answers. Let's find support that may fit
            your farming needs.
          </p>
        </div>

        <div className="discovery-result-card">
          <h2>Your answers</h2>

          {questions.map((item) => (
            <div className="answer-row" key={item.id}>
              <span>{item.question}</span>
              <strong>{answers[item.id]}</strong>
            </div>
          ))}

          <button
            className="primary-button discovery-button"
            onClick={() => {
                navigate("/scheme-recommendations", {
                  state: {
                    answers,
                  },
                });
              }}
          >
            View Relevant Schemes →
          </button>

          <button className="text-button" onClick={restart}>
            Start Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="workflow-page discovery-page compact-discovery">
      <div className="question-content">
        <span className="eyebrow">PERSONALIZED SCHEME DISCOVERY</span>
      </div>
  
      <div className="discovery-progress">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
  
        <span>
          QUESTION {currentQuestion + 1} OF {questions.length}
        </span>
      </div>
  
      <div className="question-heading">
        <h3>{question.question}</h3>
      </div>
  
      <div className="discovery-options">
        {question.options.map((option) => (
          <button
            key={option.value}
            className={`discovery-option ${
              selectedAnswer === option.value ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.value)}
          >
            <span className="option-icon">{option.icon}</span>
            <span>{option.label}</span>
            <span className="option-arrow">→</span>
          </button>
        ))}
      </div>
  
      <div className="discovery-navigation">
        <button
          className="secondary-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>
  
        <span>
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>
    </div>
  );
}