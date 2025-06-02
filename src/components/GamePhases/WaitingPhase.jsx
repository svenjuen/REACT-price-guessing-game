export default function WaitingPhase({ isHost, onStart }) {
    return (
      <div className="phase waiting-phase">
        <h2>Waiting for game to start...</h2>
        {isHost && (
          <button 
            onClick={onStart}
            className="start-button"
          >
            Start Game
          </button>
        )}
      </div>
    );
  }