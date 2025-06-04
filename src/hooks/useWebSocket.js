import { useState, useEffect } from 'react';

export default function useWebSocket(url) {
  const [gameState, setGameState] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onopen = () => {
      console.log('WebSocket connected');
      setConnectionError(false);
    };

    ws.onerror = () => {
      setConnectionError(true);
    };

    ws.onclose = () => {
      setConnectionError(true);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        switch (data.type) {
          case 'welcome':
            setPlayerId(data.playerId);
            break;
          case 'update':
            setGameState(data.gameState);
            break;
          case 'players':
            // Handle players update if needed
            break;
        }
      } catch (err) {
        console.error('Parse error:', err);
      }
    };

    return () => ws.close();
  }, [url]);

  const sendMessage = (type, data = {}) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type, ...data }));
    }
  };

  return { gameState, playerId, sendMessage, connectionError };
}