import React, { useState } from "react";

const Card = (props) => {

    const [flipped, setFlipped] = useState(false)
    const handleFlip = () => {
        setFlipped(!flipped)
    }
    return (
        <div className="card-scene" onClick={() => setFlipped(!flipped)}>
            <div className={`card-box ${flipped ? 'flipped' : ''}`}>
                <div className="card-face front">
                <p>{props.question}</p>
                </div>
                <div className="card-face back">
                <p>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;