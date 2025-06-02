import ItemDisplay from '../ItemDisplay';

export default function GuessingPhase({ 
  item, 
  timeRemaining, 
  currentGuess, 
  onGuessChange, 
  onSubmitGuess 
}) {
  return (
    <div className="phase guessing-phase">
      <ItemDisplay item={item} />
      <div className="timer">Time left: {timeRemaining}s</div>
      
      <div className="guess-input">
        <input
          type="number"
          value={currentGuess}
          onChange={(e) => onGuessChange(e.target.value)}
          placeholder="Enter price guess"
          step="0.01"
          min="0"
        />
        <button onClick={onSubmitGuess}>Submit</button>
      </div>
    </div>
  );
}