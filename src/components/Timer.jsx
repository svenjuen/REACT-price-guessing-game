import React from 'react';

// Zeigt einen Countdown-Timer mit Fortschrittsbalken an
export default function Timer({ timeRemaining, totalTime }) {
  return (
    <div className="timer">
      <p>Time left: {timeRemaining}s</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(timeRemaining / totalTime) * 100}%`,
            transition: 'width 1s ease', // Smoother Übergang
          }}
        ></div>
      </div>
    </div>
  );
}