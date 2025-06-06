import React, { useState } from 'react';
import ItemDisplay from '../ItemDisplay';
import Timer from '../Timer';

export default function GuessingPhase({ 
  item, 
  timeRemaining, 
  currentGuess, 
  onGuessChange, 
  onSubmitGuess 
}) {
  const [submittedGuess, setSubmittedGuess] = useState(null); // Speichert den letzten eingereichten Guess

  // Handler für die Enter-Taste
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitGuess();
    }
  };

  const handleSubmitGuess = () => {
    onSubmitGuess(); // 
    setSubmittedGuess(currentGuess); // Aktualisiere den letzten eingereichten Guess
  };

  return (
    <div className="phase guessing-phase">
      <ItemDisplay item={item} />
      <Timer timeRemaining={timeRemaining} totalTime={20} />
      
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
        <button onClick={handleSubmitGuess}>Senden</button>
      </div>

      {submittedGuess !== null && (
        <div className="submitted-guess-display">
          <p>Deine abgegebene Schätzung: €{submittedGuess}</p>
        </div>
      )}
    </div>
  );
}