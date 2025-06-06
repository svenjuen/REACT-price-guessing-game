import React, { useState } from 'react';
import WaitingPhase from './GamePhases/WaitingPhase';
import GuessingPhase from './GamePhases/GuessingPhase';
import ResultsPhase from './GamePhases/ResultsPhase';
import PlayerList from './PlayerList';

// Hauptcontainer für das Spiel, steuert die Anzeige der Phasen und Spieler
export default function GameContainer({ gameState, playerId, sendMessage }) {
  const [currentGuess, setCurrentGuess] = useState(''); // Aktueller Tipp des Spielers

  // Funktion zum Senden des Tipps an den Server
  const handleGuessSubmit = () => {
    if (currentGuess) {
      sendMessage('guess', { guess: parseFloat(currentGuess) });
      setCurrentGuess(''); // Eingabe zurücksetzen
    }
  };

  return (
    <div className="game-container">
      {/* Anzeige der Spieler */}
      <PlayerList players={gameState?.players} currentPlayerId={playerId} />
      
      {/* Warten auf Spieler */}
      {gameState?.phase === 'waiting' && (
        <WaitingPhase 
          onStart={() => sendMessage('start')} 
          isHost={gameState.players[0]?.id === playerId}
        />
      )}

      {/* Ratephase */}
      {gameState?.phase === 'guessing' && (
        <GuessingPhase
          item={gameState.currentItem}
          timeRemaining={gameState.timeRemaining}
          currentGuess={currentGuess}
          onGuessChange={setCurrentGuess}
          onSubmitGuess={handleGuessSubmit}
        />
      )}

      {/* Ergebnisphase */}
      {gameState?.phase === 'results' && (
        <ResultsPhase 
          item={gameState.currentItem}
          players={gameState.players}
          timeRemaining={gameState.timeRemaining}
        />
      )}
    </div>
  );
}