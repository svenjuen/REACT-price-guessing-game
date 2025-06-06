import React from 'react';
import { useState } from 'react';

// Formular zum eingeben des Namens und Beitreten des Spiels
export default function JoinScreen({ onJoin }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    if (name.length >= 2) { // Überprüft, ob der Name mindestens 2 Zeichen lang ist
      onJoin(name); 
    }
  };

  return (
    <div className="join-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          minLength={2}
          required
        />
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
}