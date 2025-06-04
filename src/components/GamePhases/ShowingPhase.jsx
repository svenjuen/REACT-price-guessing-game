import React from 'react';
import ItemDisplay from '../ItemDisplay';

export default function ShowingPhase({ item, timeRemaining }) {
  return (
    <div className="phase showing-phase">
      <h2>Memorize this item!</h2>
      <ItemDisplay item={item} />
      <div className="timer">Time remaining: {timeRemaining}s</div>
    </div>
  );
}