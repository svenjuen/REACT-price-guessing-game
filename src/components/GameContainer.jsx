import { useState } from 'react';
import WaitingPhase from './GamePhases/WaitingPhase';
import ShowingPhase from './GamePhases/ShowingPhase';
import GuessingPhase from './GamePhases/GuessingPhase';
import ResultsPhase from './GamePhases/ResultsPhase';
import PlayerList from './PlayerList';

export default function GameContainer({ gameState, playerId, sendMessage }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleGuessSubmit = () => {
    if (currentGuess) {
      sendMessage('guess', { guess: parseFloat(currentGuess) });
      setCurrentGuess('');
    }
  };

  return (
    <div className="game-container">
      <PlayerList players={gameState?.players} currentPlayerId={playerId} />
      
      {gameState?.phase === 'waiting' && (
        <WaitingPhase 
          onStart={() => sendMessage('start')} 
          isHost={gameState.players[0]?.id === playerId}
        />
      )}

      {gameState?.phase === 'showing' && (
        <ShowingPhase 
          item={gameState.currentItem} 
          timeRemaining={gameState.timeRemaining}
        />
      )}

      {gameState?.phase === 'guessing' && (
        <GuessingPhase
          item={gameState.currentItem}
          timeRemaining={gameState.timeRemaining}
          currentGuess={currentGuess}
          onGuessChange={setCurrentGuess}
          onSubmitGuess={handleGuessSubmit}
        />
      )}

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