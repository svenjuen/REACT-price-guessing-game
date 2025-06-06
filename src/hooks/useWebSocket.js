import { useState, useEffect } from 'react';

export default function useWebSocket(url) {
  const [gameState, setGameState] = useState(null); // Aktueller Spielzustand
  const [playerId, setPlayerId] = useState(null); // Eindeutige Spieler-ID
  const [socket, setSocket] = useState(null); // WebSocket-Instanz
  const [connectionError, setConnectionError] = useState(false); // Verbindungsstatus

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onopen = () => setConnectionError(false); // Verbindung erfolgreich
    ws.onerror = () => setConnectionError(true); // Fehler bei der Verbindung
    ws.onclose = () => setConnectionError(true); // Verbindung geschlossen

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        switch (data.type) {
          case 'welcome':
            setPlayerId(data.playerId); // Spieler-ID setzen
            break;
          case 'update':
            setGameState(data.gameState); // Spielzustand aktualisieren
            break;
        }
      } catch (err) {
        console.error('Parse error:', err);
      }
    };

    return () => ws.close(); // Verbindung schließen bei Cleanup
  }, [url]);

  const sendMessage = (type, data = {}) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type, ...data })); // Nachricht senden
    }
  };

  return { gameState, playerId, sendMessage, connectionError };
}