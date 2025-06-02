import { useState } from 'react';
import useWebSocket from './hooks/useWebSocket';
import JoinScreen from './components/JoinScreen';
import GameContainer from './components/GameContainer';

export default function App() {
  const { gameState, playerId, sendMessage } = useWebSocket("ws://localhost:8080");
  
  return (
    <div className="app">
      {!playerId ? (
        <JoinScreen onJoin={(name) => sendMessage('join', { name })} />
      ) : (
        <GameContainer 
          gameState={gameState}
          sendMessage={sendMessage}
          playerId={playerId}
        />
      )}
    </div>
  );
}