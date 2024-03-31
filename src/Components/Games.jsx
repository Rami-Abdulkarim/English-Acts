import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Games() {
  const inform = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Info.mp3');
    audio.play();
  }

  const handleClick = () => {
    Swal.fire ({
      title: "How to play?",
      text: "Click on the image to hear a word, then type what you hear correctly to win!",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
  };

  const handleClick2 = () => {
    Swal.fire ({
      title: "How to play?",
      text: "First, write the number of syllables in the first input. Second, split the word using slash '/' to write each syllable. For example, 'sadness' becomes 'sad/ness' in the second input.",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
  };

  const handleClick3 = () => {
    Swal.fire ({
      title: "Important!",
      text: "Kindly read the innstructions to know how to play.",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
  };

  return (
    <div className="Games-Parent">
    <div className="Games-Container">
      <div>
        <Link to="/Hangman">
          <div className="Games-Hangman"></div>
        </Link>
        <h3 className="Games-Hangman-text">Hangman</h3>
      </div>
      <br />
      <div>
      <Link to="/MCQs">
        <div className="Games-MCQs"></div>
      </Link>
      <h3 className="Games-MCQs-Text">MCQs</h3>
      </div>
      <br />
      <div>
      <Link to="/TicTacToe">
        <div className="Games-TicTacToe"></div>
      </Link>
      <h3 className="Games-TicTacToe-Text">Tic Tac Toe</h3>
      </div>
      <br />
      <div>
        <Link to='/TypeTheWord'>
          <div className="Games-TypeTheWord" onClick={() => {
            handleClick();
            inform();
          }}></div></Link>
          <h3 className="Games-TypeTheWord-Text">Type The Word</h3>
      </div>
      <br />
      <div>
        <Link to='/MatchWI'>
        <div className="Games-MatchWI"></div></Link>
        <h3 className="Games-MatchWI-Text">Match Words<br /> With Images</h3>
      </div>
    </div>

    <div className="Games-container2">
      <div>
        <Link to="/Memory">
          <div className="Games-Memory"></div>
        </Link>
        <h3 className="Games-Memory-Text">Memory Game</h3>
      </div>
      <br />
      <div>
        <Link to="/SyllablesFinder">
          <div className="Games-SyllablesFinder" onClick={() => {
            handleClick2();
            inform();
          }}></div>
        </Link>
        <h3 className="Games-SyllablesFinder-Text">Syllables Finder</h3>
      </div>
      <br />
      <div>
        <Link to="/Homophones">
          <div className="Games-Homophones" onClick={() => {
            handleClick3();
            inform();
          }}></div>
        </Link>
        <h3 className="Games-Homophones-Text">Homophones King 👑</h3>
      </div>
    </div>
    </div>
  );
}

export default Games;