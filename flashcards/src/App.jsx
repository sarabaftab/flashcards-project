import { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

const cardSet = {
  title: "Football Trivia",
  description: "Test your knowledge of football legends and history.",
  cards: [
    {
      question: "Which player has won the most Ballon d'Or awards?",
      answer: "Lionel Messi",
    },
    {
      question: "Which club did Cristiano Ronaldo rejoin in 2021?",
      answer: "Manchester United",
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      answer: "Brazil",
    },
    {
      question:
        "Who is the all-time top scorer in UEFA Champions League history?",
      answer: "Cristiano Ronaldo",
    },
    {
      question: "Which club is nicknamed 'The Blaugrana'?",
      answer: "FC Barcelona",
    },
    { question: "What number does Messi usually wear?", answer: "10" },
    {
      question: "Who won the Golden Boot at the 2022 FIFA World Cup?",
      answer: "Kylian Mbappé",
    },
    {
      question: "Which club has won the most Premier League titles?",
      answer: "Manchester United",
    },
    {
      question: "Who scored a hat-trick against Spain in the 2018 World Cup?",
      answer: "Cristiano Ronaldo",
    },
    {
      question:
        "Which Argentine club did Messi play for before joining Barcelona?",
      answer: "Newell's Old Boys",
    },
  ],
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardSet.cards.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
  };

  const currentCard = cardSet.cards[currentIndex];

  return (
    <div className="app-container">
      <h1>{cardSet.title}</h1>
      <p>{cardSet.description}</p>
      <p>Total Cards: {cardSet.cards.length}</p>

      <Flashcard question={currentCard.question} answer={currentCard.answer} />

      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default App;
