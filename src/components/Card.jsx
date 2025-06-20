import React, { useState } from "react";


const Card = ({ question, answer, difficulty }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-scene">
      <div
        className={`card-box ${flipped ? "flipped" : ""} ${difficulty}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-face front">
          <p>{question}</p>
        </div>
        <div className="card-face back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
