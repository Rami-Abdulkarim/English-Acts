import React from "react";
import "./TicTacToe.css";
import circle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";
import {useRef, useState} from "react"; //To access react state and ref.
import Click from '../../Click';

let data = ["", "", "", "", "", "", "", "", ""]; //Storage for the game.

const TicTacToe = () => {
  const winnerSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const xClick = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click2.mp3');
    audio.play();
  };

  const oClick = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click3.mp3');
    audio.play();
};

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  function toggle(e, num) {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
      xClick();
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
      oClick();
    }
    checkWin();
  }

  const checkWin = () => {
    if (data[0]===data[1] && data[1]===data[2] && data[2]!== "") {
      won(data[2]);
    } else if (data[3]===data[4] && data[4]===data[5] && data[5]!== "") {
      won(data[5]);
    } else if (data[6]===data[7] && data[7]===data[8] && data[8]!== "") {
      won(data[8]);
    } else if (data[0]===data[3] && data[3]===data[6] && data[6]!== "") {
      won(data[6]);
    } else if (data[1]===data[4] && data[4]===data[7] && data[7]!== "") {
      won(data[7]);
    } else if (data[2]===data[5] && data[5]===data[8] && data[8]!== "") {
      won(data[8]);
    } else if (data[0]===data[4] && data[4]===data[8] && data[8]!== "") {
      won(data[8]);
    } else if (data[0]===data[1] && data[1]===data[2] && data[2]!== "") {
      won(data[2]);
    } else if (data[2]===data[4] && data[4]===data[6] && data[6]!== "") {
      won(data[6]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: X`;
      winnerSound();
    } else {
      titleRef.current.innerHTML = `Congratulations: O`;
      winnerSound();
    }
  }

  const reset = (winner) => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "TicTacToe With <span>English!</span>";
    box_array.map ((e) => {
      e.current.innerHTML = "";
    })
    Click();
  }

  return (
    <div className="TicTacToe-Container">
      <h1 className="TicTacToe-H1" ref={titleRef}>
        TicTacToe With<span>English!</span>
      </h1>
      <div className="TicTacToe-Board">
        <div className="TicTacToe-Row1">
          <div
            className="TicTacToe-Boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="TicTacToe-Row2">
          <div
            className="TicTacToe-Boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="TicTacToe-Row3">
          <div
            className="TicTacToe-Boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="TicTacToe-Boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="TicTacToe-Reset" onClick={() => {reset()}}>Reset</button>
    </div>
  );
};

export default TicTacToe;