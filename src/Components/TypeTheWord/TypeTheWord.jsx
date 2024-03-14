import React from "react";
import "./TypeTheWord.css";
import { useState } from "react";
import questionMark from "./Images/question-mark.jpg";
import museum from "./Images/museum.jpeg";
import ocean from "./Images/Ocean.jpg";
import park from "./Images/Park.jpeg";
import desktop from "./Images/Desktop.jpg";
import theater from "./Images/Theater.jpeg";
import zoo from "./Images/Zoo.jpeg";
import sunset from "./Images/Sunset.jpeg";
import office from "./Images/Office.jpeg";
import mill from "./Images/Mill.jpeg";
import supermarket from "./Images/Supermarket.jpeg";
import Swal from "sweetalert2";

function TypeTheWord() {

  const correct = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const museumSound = () => {
    const audio1 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Museum.mp3');
    audio1.play();
  };

  const parkSound = () => {
    const audio2 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Park.mp3');
    audio2.play();
  };

  const oceanSound = () => {
    const audio3 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Ocean.mp3');
    audio3.play();
  };

  const desktopSound = () => {
    const audio4 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Desktop.mp3');
    audio4.play();
  };

  const theaterSound = () => {
    const audio5 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Theater.mp3');
    audio5.play();
  };

  const zooSound = () => {
    const audio6 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Zoo.mp3');
    audio6.play();
  };

  const sunsetSound = () => {
    const audio7 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Sunset.mp3');
    audio7.play();
  };

  const officeSound = () => {
    const audio8 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Office.mp3');
    audio8.play();
  };

  const millSound = () => {
    const audio9 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Mill.mp3');
    audio9.play();
  };

  const supermarketSound = () => {
    const audio10 = new Audio(process.env.PUBLIC_URL + '/Sounds/TypeTheWordSounds/Supermarket.mp3');
    audio10.play();
  };

  const [img1, setImg1] = useState(questionMark);
  const handleImg1 = () => {
    setImg1(museum);
  };
  const [img2, setImg2] = useState(questionMark);
  const handleImg2 = () => {
    setImg2(park);
  };
  const [img3, setImg3] = useState(questionMark);
  const handleImg3 = () => {
    setImg3(ocean);
  };
  const [img4, setImg4] = useState(questionMark);
  const handleImg4 = () => {
    setImg4(desktop);
  };
  const [img5, setImg5] = useState(questionMark);
  const handleImg5 = () => {
    setImg5(theater);
  };
  const [img6, setImg6] = useState(questionMark);
  const handleImg6 = () => {
    setImg6(zoo);
  };
  const [img7, setImg7] = useState(questionMark);
  const handleImg7 = () => {
    setImg7(sunset);
  };
  const [img8, setImg8] = useState(questionMark);
  const handleImg8 = () => {
    setImg8(office);
  };
  const [img9, setImg9] = useState(questionMark);
  const handleImg9 = () => {
    setImg9(mill);
  };
  const [img10, setImg10] = useState(questionMark);
  const handleImg10 = () => {
    setImg10(supermarket);
  };

  const [answer1, setAnswer1] = useState("");
  const [flip1, setFlip1] = useState(false);
  const handleAnswer1 = (e) => {
    setAnswer1(e.target.value);

    if (e.target.value.toLowerCase() === "museum") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip1(true);
      setTimeout(() => {
        handleImg1();
        setFlip1(false);
      }, 600);
    }
  };

  const [answer2, setAnswer2] = useState("");
  const [flip2, setFlip2] = useState(false);
  const handleAnswer2 = (e) => {
    setAnswer2(e.target.value);

    if (e.target.value.toLowerCase() === "park") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip2(true);
      setTimeout(() => {
        handleImg2();
        setFlip2(false);
      }, 600);
    }
  };

  const [answer3, setAnswer3] = useState("");
  const [flip3, setFlip3] = useState(false);
  const handleAnswer3 = (e) => {
    setAnswer3(e.target.value);

    if (e.target.value.toLowerCase() === "ocean") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip3(true);
      setTimeout(() => {
        handleImg3();
        setFlip3(false);
      }, 600);
    }
  };

  const [answer4, setAnswer4] = useState("");
  const [flip4, setFlip4] = useState(false);
  const handleAnswer4 = (e) => {
    setAnswer4(e.target.value);

    if (e.target.value.toLowerCase() === "desktop") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip4(true);
      setTimeout(() => {
        handleImg4();
        setFlip4(false);
      }, 600);
    }
  };

  const [answer5, setAnswer5] = useState("");
  const [flip5, setFlip5] = useState(false);
  const handleAnswer5 = (e) => {
    setAnswer5(e.target.value);

    if (e.target.value.toLowerCase() === "theater") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip5(true);
      setTimeout(() => {
        handleImg5();
        setFlip5(false);
      }, 600);
    }
  };

  const [answer6, setAnswer6] = useState("");
  const [flip6, setFlip6] = useState(false);
  const handleAnswer6 = (e) => {
    setAnswer6(e.target.value);

    if (e.target.value.toLowerCase() === "zoo") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip6(true);
      setTimeout(() => {
        handleImg6();
        setFlip6(false);
      }, 600);
    }
  };

  const [answer7, setAnswer7] = useState("");
  const [flip7, setFlip7] = useState(false);
  const handleAnswer7 = (e) => {
    setAnswer7(e.target.value);

    if (e.target.value.toLowerCase() === "sunset") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip7(true);
      setTimeout(() => {
        handleImg7();
        setFlip7(false);
      }, 600);
    }
  };

  const [answer8, setAnswer8] = useState("");
  const [flip8, setFlip8] = useState(false);
  const handleAnswer8 = (e) => {
    setAnswer8(e.target.value);

    if (e.target.value.toLowerCase() === "office") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip8(true);
      setTimeout(() => {
        handleImg8();
        setFlip8(false);
      }, 600);
    }
  };

  const [answer9, setAnswer9] = useState("");
  const [flip9, setFlip9] = useState(false);
  const handleAnswer9 = (e) => {
    setAnswer9(e.target.value);

    if (e.target.value.toLowerCase() === "mill") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip9(true);
      setTimeout(() => {
        handleImg9();
        setFlip9(false);
      }, 600);
    }
  };

  const [answer10, setAnswer10] = useState("");
  const [flip10, setFlip10] = useState(false);
  const handleAnswer10 = (e) => {
    setAnswer10(e.target.value);

    if (e.target.value.toLowerCase() === "supermarket") {
      Swal.fire({
        title: "Correct 😄",
        text: "Good job!",
        icon: "success",
        iconColor: "green",
        color: "green",
      });
      correct();
      setFlip10(true);
      setTimeout(() => {
        handleImg10();
        setFlip10(false);
      }, 600);
    }
  };

  return (
    <div className="TypeTheWord-Parent">
      <h1 className="TypeTheWord-h1">Guess The Word 😄</h1>
      <div className="TypeTheWord-Parent-Container">
      <div className="TypeTheWord-Container">
        <div className="TypeTheWord-Q">
          <img onClick={museumSound} className={`TypeTheWord-Image ${flip1 ? 'flip' : ''}`} src={img1} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer1}
              onChange={handleAnswer1}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={parkSound} className={`TypeTheWord-Image ${flip2 ? 'flip' : ''}`} src={img2} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer2}
              onChange={handleAnswer2}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={oceanSound} className={`TypeTheWord-Image ${flip3 ? 'flip' : ''}`} src={img3} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer3}
              onChange={handleAnswer3}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={desktopSound} className={`TypeTheWord-Image ${flip4 ? 'flip' : ''}`} src={img4} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer4}
              onChange={handleAnswer4}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={theaterSound} className={`TypeTheWord-Image ${flip5 ? 'flip' : ''}`} src={img5} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer5}
              onChange={handleAnswer5}
            />
          </div>
        </div>
      </div>

      <div className="TypeTheWord-Container">
        <div className="TypeTheWord-Q">
          <img onClick={zooSound} className={`TypeTheWord-Image ${flip6 ? 'flip' : ''}`} src={img6} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer6}
              onChange={handleAnswer6}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={sunsetSound} className={`TypeTheWord-Image ${flip7 ? 'flip' : ''}`} src={img7} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer7}
              onChange={handleAnswer7}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={officeSound} className={`TypeTheWord-Image ${flip8 ? 'flip' : ''}`} src={img8} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer8}
              onChange={handleAnswer8}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={millSound} className={`TypeTheWord-Image ${flip9 ? 'flip' : ''}`} src={img9} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer9}
              onChange={handleAnswer9}
            />
          </div>
        </div>

        <div className="TypeTheWord-Q">
          <img onClick={supermarketSound} className={`TypeTheWord-Image ${flip10 ? 'flip' : ''}`} src={img10} />
          <div className="TypeTheWord-Text">
            <input
              type="text"
              className="TypeTheWord-Input"
              placeholder="Your answer"
              value={answer10}
              onChange={handleAnswer10}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeTheWord;
