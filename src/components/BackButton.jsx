import { useNavigate } from "react-router-dom";
import "./back-button.css";

export default function BackButton({ fallback = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button className="page-back-button" onClick={handleBack}>
      ← Back
    </button>
  );
}