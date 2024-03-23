import React from "react";
import "./SyllablesFinder.css";
import Swal from "sweetalert2";
import { useState } from "react";

const SyllablesFinder = () => {
  const infoSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/Sounds/Info.mp3");
    audio.play();
  };

  const correctSound = () => {
    const audio2 = new Audio(process.env.PUBLIC_URL + "/Sounds/Correct.mp3");
    audio2.play();
  };

  const wrongSound = () => {
    const audio3 = new Audio(process.env.PUBLIC_URL + "/Sounds/Wrong.mp3");
    audio3.play();
  };

  const warnSound = () => {
    const audio4 = new Audio(process.env.PUBLIC_URL + "/Sounds/Warn.mp3");
    audio4.play();
  };

  const handleCorrectAnswer = () => {
    Swal.fire({
      title: "Correct Answer! 😄",
      text: "Excellent Work!",
      icon: "success",
      iconColor: "green",
      color: "green",
    });
    correctSound();
  };

  const handleWrongAnswer = () => {
    Swal.fire({
      title: "Wrong Answer! 😥",
      text: "Sorry, Try Again.",
      icon: "error",
      iconColor: "red",
      color: "red",
    });
    wrongSound();
  };

  const handleCheckNumber = () => {
    Swal.fire({
      title: "Something Wrong! 😥",
      text: "Check the number of syllables.",
      icon: "warning",
      iconColor: "orange",
      color: "orange",
    });
    warnSound();
  };

  const handleCheckWord = () => {
    Swal.fire({
      title: "Something Wrong! 😥",
      text: "Make sure you typed the word correctly.",
      icon: "warning",
      iconColor: "orange",
      color: "orange",
    });
    warnSound();
  };

  const [numberAnswer1, setNumberAnswer1] = useState("");
  const [textAnswer1, setTextAnswer1] = useState("");
  const handleNumberAnswer1 = (e) => {
    setNumberAnswer1(e.target.value);
  };
  const handleTextAnswer1 = (e) => {
    setTextAnswer1(e.target.value);
  };
  const handleAnswer1 = () => {
    if (numberAnswer1 === "" || textAnswer1 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer1 === "2" && textAnswer1.toLowerCase() === "ha/ppy") {
      handleCorrectAnswer();
    } else if (numberAnswer1 !== "2" && textAnswer1.toLowerCase() === "ha/ppy") {
      handleCheckNumber();
    } else if (numberAnswer1 === "2" && textAnswer1.toLowerCase() !== "ha/ppy") {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const [numberAnswer2, setNumberAnswer2] = useState("");
  const [textAnswer2, setTextAnswer2] = useState("");
  const handleNumberAnswer2 = (e) => {
    setNumberAnswer2(e.target.value);
  };
  const handleTextAnswer2 = (e) => {
    setTextAnswer2(e.target.value);
  };
  const handleAnswer2 = () => {
    if (numberAnswer2 === "" || textAnswer2 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer2 === "3" && textAnswer2.toLowerCase() === "ar/gu/ment") {
      handleCorrectAnswer();
    } else if (
      numberAnswer2 !== "3" &&
      textAnswer2.toLowerCase() === "ar/gu/ment"
    ) {
      handleCheckNumber();
    } else if (
      numberAnswer2 === "3" &&
      textAnswer2.toLowerCase() !== "ar/gu/ment"
    ) {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const [numberAnswer3, setNumberAnswer3] = useState("");
  const [textAnswer3, setTextAnswer3] = useState("");
  const handleNumberAnswer3 = (e) => {
    setNumberAnswer3(e.target.value);
  };
  const handleTextAnswer3 = (e) => {
    setTextAnswer3(e.target.value);
  };
  const handleAnswer3 = () => {
    if (numberAnswer3 === "" || textAnswer3 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer3 === "2" && textAnswer3.toLowerCase() === "sel/fish") {
      handleCorrectAnswer();
    } else if (numberAnswer3 !== "2" && textAnswer3.toLowerCase() === "sel/fish") {
      handleCheckNumber();
    } else if (numberAnswer3 === "2" && textAnswer3.toLowerCase() !== "sel/fish") {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const [numberAnswer4, setNumberAnswer4] = useState("");
  const [textAnswer4, setTextAnswer4] = useState("");
  const handleNumberAnswer4 = (e) => {
    setNumberAnswer4(e.target.value);
  };
  const handleTextAnswer4 = (e) => {
    setTextAnswer4(e.target.value);
  };
  const handleAnswer4 = () => {
    if (numberAnswer4 === "" || textAnswer4 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer4 === "2" && textAnswer4.toLowerCase() === "wednes/day") {
      handleCorrectAnswer();
    } else if (
      numberAnswer4 !== "2" &&
      textAnswer4.toLowerCase() === "wednes/day"
    ) {
      handleCheckNumber();
    } else if (
      numberAnswer4 === "2" &&
      textAnswer4.toLowerCase() !== "wednes/day"
    ) {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const [numberAnswer5, setNumberAnswer5] = useState("");
  const [textAnswer5, setTextAnswer5] = useState("");
  const handleNumberAnswer5 = (e) => {
    setNumberAnswer5(e.target.value);
  };
  const handleTextAnswer5 = (e) => {
    setTextAnswer5(e.target.value);
  };
  const handleAnswer5 = () => {
    if (numberAnswer5 === "" || textAnswer5 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer5 === "1" && textAnswer5.toLowerCase() === "game") {
      handleCorrectAnswer();
    } else if (numberAnswer5 !== "1" && textAnswer5.toLowerCase() === "game") {
      handleCheckNumber();
    } else if (numberAnswer5 === "1" && textAnswer5.toLowerCase() !== "game") {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const [numberAnswer6, setNumberAnswer6] = useState("");
  const [textAnswer6, setTextAnswer6] = useState("");
  const handleNumberAnswer6 = (e) => {
    setNumberAnswer6(e.target.value);
  };
  const handleTextAnswer6 = (e) => {
    setTextAnswer6(e.target.value);
  };
  const handleAnswer6 = () => {
    if (numberAnswer6 === "" || textAnswer6 === "") {
      Swal.fire({
        title: "Something Missing! 🤔",
        text: "Please fill all the required inputs.",
        icon: "warning",
        iconColor: "orange",
        color: "orange",
      });
      warnSound();
      return;
    }

    if (numberAnswer6 === "4" && textAnswer6.toLowerCase() === "bi/o/lo/gy") {
      handleCorrectAnswer();
    } else if (
      numberAnswer6 !== "4" &&
      textAnswer6.toLowerCase() === "bi/o/lo/gy"
    ) {
      handleCheckNumber();
    } else if (
      numberAnswer6 === "4" &&
      textAnswer6.toLowerCase() !== "bi/o/lo/gy"
    ) {
      handleCheckWord();
    } else {
      handleWrongAnswer();
    }
  };

  const handleInfoClick1 = () => {
    Swal.fire({
      title: "Correct Word: Ha/ppy",
      text: "Number of syllables: 2",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  const handleInfoClick2 = () => {
    Swal.fire({
      title: "Correct Word: Ar/gue/ment",
      text: "Number of syllables: 3",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  const handleInfoClick3 = () => {
    Swal.fire({
      title: "Correct Word: Sel/fish",
      text: "Number of syllables: 2",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  const handleInfoClick4 = () => {
    Swal.fire({
      title: "Correct Word: Wednes/day",
      text: "Number of syllables: 2",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  const handleInfoClick5 = () => {
    Swal.fire({
      title: "Correct Word: Game",
      text: "Number of syllables: 1",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  const handleInfoClick6 = () => {
    Swal.fire({
      title: "Correct Word: Bi/o/lo/gy",
      text: "Number of syllables: 4",
      icon: "info",
      iconColor: "blue",
      color: "blue",
    });
    infoSound();
  };

  return (
    <div className="SyllablesFinder-Parent">
      <h1 className="SyllablesFinder-H1">Syllables Finder 🔎</h1>
      <div className="SyllablesFinder-Container1">
        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Happy</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer1}
              onChange={handleNumberAnswer1}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer1}
              onChange={handleTextAnswer1}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer1} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick1}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>

        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Argument</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer2}
              onChange={handleNumberAnswer2}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer2}
              onChange={handleTextAnswer2}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer2} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick2}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>

        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Selfish</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer3}
              onChange={handleNumberAnswer3}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer3}
              onChange={handleTextAnswer3}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer3} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick3}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>

        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Wednesday</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer4}
              onChange={handleNumberAnswer4}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer4}
              onChange={handleTextAnswer4}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer4} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick4}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>

        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Game</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer5}
              onChange={handleNumberAnswer5}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer5}
              onChange={handleTextAnswer5}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer5} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick5}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>

        <span>
          <div className="SyllablesFinder-Box">
            <h3 className="SyllablesFinder-Box-Text">Biology</h3>
          </div>
          <br />
          <div className="SyllablesFinder-Input-Flex">
            <input
              value={numberAnswer6}
              onChange={handleNumberAnswer6}
              type="number"
              placeholder="Number of Syllables"
              className="SyllablesFinder-Input"
            />
            <input
              value={textAnswer6}
              onChange={handleTextAnswer6}
              type="text"
              placeholder="Write the Syllables"
              className="SyllablesFinder-Input"
            />
            <br />
            <br />
            <button onClick={handleAnswer6} className="SyllablesFinder-Button">
              Check Answer
            </button>
            <button
              onClick={handleInfoClick6}
              className="SyllablesFinder-Button"
            >
              See Answer
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default SyllablesFinder;
