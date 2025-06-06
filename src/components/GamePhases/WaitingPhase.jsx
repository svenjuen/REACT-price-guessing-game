import React from 'react';      

// Phase, in der auf weitere Spieler gewartet wird
export default function WaitingPhase({ isHost, onStart,}) {
    return (
      <div className="phase waiting-phase">
        <h2>Auf Spielbeginn warten...</h2>
                  <button onClick={onStart} className="start-button">Spiel starten</button>        
      </div>
    );
}