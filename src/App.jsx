import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const financeCards = [
  {
    question: "What is a stock?",
    answer: "A stock represents ownership in a company and a claim on a part of its assets and earnings."
  },
  {
    question: "What does ROI stand for?",
    answer: "Return on Investment — a measure of profitability calculated as (Gain - Cost) / Cost."
  },
  {
    question: "What is a bond?",
    answer: "A bond is a fixed-income instrument that represents a loan made by an investor to a borrower."
  },
  {
    question: "What is the S&P 500?",
    answer: "A stock market index tracking the performance of 500 large companies listed on U.S. stock exchanges."
  },
  {
    question: "What is compound interest?",
    answer: "Interest calculated on the initial principal and also on the accumulated interest from previous periods."
  },
  {
    question: "What is diversification?",
    answer: "A risk management strategy that mixes a wide variety of investments within a portfolio."
  },
  {
    question: "What is a mutual fund?",
    answer: "An investment vehicle that pools money from many investors to purchase securities."
  },
  {
    question: "What does inflation mean?",
    answer: "The rate at which the general level of prices for goods and services is rising, decreasing purchasing power."
  },
  {
    question: "What is a 401(k)?",
    answer: "A retirement savings plan offered by employers that allows employees to invest a portion of their paycheck before taxes."
  },
  {
    question: "What is a credit score?",
    answer: "A number between 300–850 that represents a person's creditworthiness based on credit history."
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < financeCards.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : financeCards.length - 1));
  };

  const currentCard = financeCards[currentIndex];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Finance Flashcards</h1>
      <h2>How well do you really understand the basics of personal finance?</h2>
      <Card question={currentCard.question} answer={currentCard.answer} />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrev} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p style={{ marginTop: '10px' }}>Card {currentIndex + 1} of {financeCards.length}</p>
    </div>
  );
}

export default App
