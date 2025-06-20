import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const financeCards = [
  {
    question: "What is a stock?",
    answer: "A stock represents ownership in a company and a claim on a part of its assets and earnings.",
    difficulty: "easy"
  },
  {
    question: "What does ROI stand for?",
    answer: "Return on Investment — a measure of profitability calculated as (Gain - Cost) / Cost.",
    difficulty: "medium"
  },
  {
    question: "What is a bond?",
    answer: "A bond is a fixed-income instrument that represents a loan made by an investor to a borrower.",
    difficulty: "medium"
  },
  {
    question: "What is the S&P 500?",
    answer: "A stock market index tracking the performance of 500 large companies listed on U.S. stock exchanges.",
    difficulty: "hard"
  },
  {
    question: "What is compound interest?",
    answer: "Interest calculated on the initial principal and also on the accumulated interest from previous periods.",
    difficulty: "easy"
  },
  {
    question: "What is diversification?",
    answer: "A risk management strategy that mixes a wide variety of investments within a portfolio.",
    difficulty: "medium"
  },
  {
    question: "What is a mutual fund?",
    answer: "An investment vehicle that pools money from many investors to purchase securities.",
    difficulty: "easy"
  },
  {
    question: "What does inflation mean?",
    answer: "The rate at which the general level of prices for goods and services is rising, decreasing purchasing power.",
    difficulty: "medium"
  },
  {
    question: "What is a 401(k)?",
    answer: "A retirement savings plan offered by employers that allows employees to invest a portion of their paycheck before taxes.",
    difficulty: "easy"
  },
  {
    question: "What is a budget?",
    answer: "A budget is a financial plan that helps track income and expenses to manage spending and save money.",
    difficulty: "easy"
  }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * financeCards.length);
    } while (randomIndex === currentIndex); // prevent showing same card

    setCurrentIndex(randomIndex);
  };


  const currentCard = financeCards[currentIndex];

  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Finance Flashcards</h1>

      <h2 style={{ fontWeight: 'normal', fontSize: '1.1rem', color: '#e5e7eb' }}>
        How well do you really understand the basics of personal finance?
      </h2>

      <Card
        question={currentCard.question}
        answer={currentCard.answer}
        difficulty={currentCard.difficulty}
      />

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={handleNext}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#3b82f6',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
        >
          Next
        </button>
      </div>

      <p style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '0.95rem' }}>
        Card {currentIndex + 1} of {financeCards.length}     
      </p>
    </div>
  );


}

export default App;
