import React from 'react';

export default function Timer({ timeRemaining, totalTime }) {
  return (
    <div className="timer">
      <p>Time left: {timeRemaining}s</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(timeRemaining / totalTime) * 100}%`,
            transition: 'width 1s ease', // Smooth animation
          }}
        ></div>
      </div>
    </div>
  );
}