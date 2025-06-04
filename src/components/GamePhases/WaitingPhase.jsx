import React from 'react';      

export default function WaitingPhase({ isHost, onStart, players }) {
    return (
      <div className="phase waiting-phase">
        <h2>Waiting for game to start...</h2>
        
        <div className="player-list">
          <h3>Players:</h3>
          {players?.length > 0 ? (
            players.map(player => (
              <div key={player.id} className="player-item">
                <span>{player.name}</span>
              </div>
            ))
          ) : (
            <p>No players have joined yet.</p>
          )}
        </div>

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