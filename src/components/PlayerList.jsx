import React from 'react';

// Zeigt die Liste der Spieler an
export default function PlayerList({ players, currentPlayerId }) {
  return (
    <div className="player-list">
      {players?.map(player => (
        <div 
          key={player.id} 
          className={`player-card ${player.id === currentPlayerId ? 'current-player' : ''}`}
        >
          <span>{player.name}</span>
          <span>{player.score} pts</span>
        </div>
      ))}
    </div>
  );
}