import React, { useState } from 'react';
import ItemDisplay from '../ItemDisplay';

export default function GuessingPhase({ 
  item, 
  timeRemaining, 
  currentGuess, 
  onGuessChange, 
  onSubmitGuess 
}) {
  const [submittedGuess, setSubmittedGuess] = useState(null); // Track the last submitted guess

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitGuess();
    }
  };

  const handleSubmitGuess = () => {
    onSubmitGuess(); // Send the guess to the server
    setSubmittedGuess(currentGuess); // Update the submitted guess
  };

  return (
    <div className="phase guessing-phase">
      <ItemDisplay item={item} />
      <div className="timer">Time left: {timeRemaining}s</div>
      
      <div className="guess-input">
        <input
          type="number"
          value={currentGuess}
          onChange={(e) => onGuessChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter price guess"
          step="0.01"
          min="0"
        />
        <button onClick={handleSubmitGuess}>Submit</button>
      </div>

      {submittedGuess !== null && (
        <div className="submitted-guess-display">
          <p>Your submitted guess: €{submittedGuess}</p>
        </div>
      )}
    </div>
  );
}