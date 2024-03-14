import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="Hangman-word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="Hangman-letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word;