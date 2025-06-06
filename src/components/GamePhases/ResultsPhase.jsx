import React from 'react';
import ItemDisplay from '../ItemDisplay';
import Timer from '../Timer';

// Phase, in der die Ergebnisse der Runde angezeigt werden
export default function ResultsPhase({ item, players, timeRemaining }) {
  // Spieler nach Genauigkeit der Schätzung sortieren
  const sortedPlayers = [...players].sort((a, b) => {
    const diffA = a.lastDiff ?? Infinity;
    const diffB = b.lastDiff ?? Infinity;
    return diffA - diffB;
  });

  return (
    <div className="phase results-phase">
      <h2>Rundenergebnisse</h2>
      <ItemDisplay item={item} />
      <p>Eigentlicher Preis: ${item?.price?.toFixed(2)}</p>
      
      {/* Countdown-Timer */}
      <Timer timeRemaining={timeRemaining} totalTime={10} />
      
      {/* Liste der Spielergebnisse */}
      <div className="results-list">
        {sortedPlayers.map((player, index) => (
          <div key={player.id} className={`player-result ${index === 0 ? 'winner' : ''}`}>
            <span>{player.name}</span>
            <span>Geschätzt: €{player.currentGuess?.toFixed(2)}</span>
            <span>Differenz: €{player.lastDiff?.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
