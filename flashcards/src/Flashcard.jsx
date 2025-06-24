import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="flashcard-wrapper" onClick={handleFlip}>
      <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    </div>
  );
}

export default Flashcard;
