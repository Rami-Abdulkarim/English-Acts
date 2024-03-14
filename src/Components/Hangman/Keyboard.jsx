import React from 'react';

const Keyboard = ({ onClick }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {letters.map(letter => (
        <button key={letter} onClick={() => onClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;