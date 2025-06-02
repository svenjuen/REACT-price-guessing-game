import { useState, useEffect } from 'react';

export default function useWebSocket(url) {
  const [gameState, setGameState] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'welcome':
          setPlayerId(data.playerId);
          break;
        case 'update':
          setGameState(data.gameState);
          break;
        case 'timerUpdate':
          setGameState(prev => ({ ...prev, timeRemaining: data.timeRemaining }));
          break;
      }
    };

    return () => ws.close();
  }, [url]);

  const sendMessage = (type, data) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type, ...data }));
    }
  };

  return { gameState, playerId, sendMessage };
}