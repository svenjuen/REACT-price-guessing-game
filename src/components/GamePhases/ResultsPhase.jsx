import React from 'react';
import ItemDisplay from '../ItemDisplay';
import Timer from '../Timer';

export default function ResultsPhase({ item, players, timeRemaining }) {
  const sortedPlayers = [...players].sort((a, b) => {
    const diffA = a.lastDiff ?? Infinity;
    const diffB = b.lastDiff ?? Infinity;
    return diffA - diffB;
  });

  return (
    <div className="phase results-phase">
      <h2>Round Results</h2>
      <ItemDisplay item={item} />
      <p>Actual Price: ${item?.price?.toFixed(2)}</p>
      
      <Timer timeRemaining={timeRemaining} totalTime={10} /> {/* Timer for results phase */}
      
      <div className="results-list">
        {sortedPlayers.map((player, index) => (
          <div key={player.id} className={`player-result ${index === 0 ? 'winner' : ''}`}>
            <span>{player.name}</span>
            <span>Guessed: ${player.currentGuess?.toFixed(2)}</span>
            <span>Difference: ${player.lastDiff?.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
