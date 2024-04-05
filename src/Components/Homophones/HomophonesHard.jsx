import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const HomophonesHard = () => {

  const [correctAnswer, setCorrectAnswer] = useState(false);

  const correctSound = () => {
    const audio = new Audio (process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const wrongSound = () => {
    const audio2 = new Audio (process.env.PUBLIC_URL + '/Sounds/Wrong.mp3');
    audio2.play();
  };

  const congratsSound = () => {
    const audio3 = new Audio (process.env.PUBLIC_URL + '/Sounds/Congrats.wav');
    audio3.play();
  };

  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire ({
      title: "Great Job 😄!",
      text: "What a nice knowledge!",
      icon: "success",
      iconColor: "green",
      color: "green",
    });
    correctSound();
    setCorrectAnswer(true);
  };

  const handleClick2 = () => {
    Swal.fire ({
      title: "Wrong Answer 🙁",
      text: "Sorry, you're out.",
      icon: "error",
      iconColor: "red",
      color: "red",
    });
    wrongSound();
    navigate('/Homophones');
  };

  const handleClick3 = () => {
    Swal.fire ({
      title: "Congratulations 😄!",
      text: "You did a great job!",
      icon: "success",
      iconColor: "green",
      color: "green",
    });
    congratsSound();
    setCorrectAnswer(true);
  };

  const firstQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 1/10</h1>
      <div className='HomophonesHard-Image'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleQ2} className='HomophonesHard-Buttons'>Waste</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Waist</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Waiste</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Wayste</button>
      </div>
    </div>
    );
  };

  const secondQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 2/10</h1>
      <div className='HomophonesHard-Image2'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Brick</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Break</button>
        <button onClick={handleQ3} className='HomophonesHard-Buttons'>Brake</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Brack</button>
      </div>
    </div>
    );
  };

  const thirdQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 3/10</h1>
      <div className='HomophonesHard-Image3'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Wale</button>
        <button onClick={handleQ4} className='HomophonesHard-Buttons'>Whale</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Wail</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Waile</button>
      </div>
    </div>
    );
  };

  const fourthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 4/10</h1>
      <div className='HomophonesHard-Image4'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Dual</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Duele</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Duale</button>
        <button onClick={handleQ5} className='HomophonesHard-Buttons'>Duel</button>
      </div>
    </div>
    );
  };

  const fifthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 5/10</h1>
      <div className='HomophonesHard-Image5'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Woar</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Ware</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>War</button>
        <button onClick={handleQ6} className='HomophonesHard-Buttons'>Wore</button>
      </div>
    </div>
    );
  };

  const sixthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 6/10</h1>
      <div className='HomophonesHard-Image6'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Sale</button>
        <button onClick={handleQ7} className='HomophonesHard-Buttons'>Sail</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Saile</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Sile</button>
      </div>
    </div>
    );
  };

  const seventhQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 7/10</h1>
      <div className='HomophonesHard-Image7'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleQ8} className='HomophonesHard-Buttons'>Soul</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Sool</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Soal</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Sole</button>
      </div>
    </div>
    );
  };

  const eighthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 8/10</h1>
      <div className='HomophonesHard-Image8'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Sour</button>
        <button onClick={handleQ9} className='HomophonesHard-Buttons'>Sore</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Soar</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Soare</button>
      </div>
    </div>
    );
  };

  const ninthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 9/10</h1>
      <div className='HomophonesHard-Image9'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Vaine</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Vain</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Vane</button>
        <button onClick={handleQ10} className='HomophonesHard-Buttons'>Vein</button>
      </div>
    </div>
    );
  };

  const tenthQuestion = () => {
    return (
        <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1>Question 10/10</h1>
      <div className='HomophonesHard-Image10'></div>
      </div>
      <div className='HomophonesHard-Choices'>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Threwn</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Throwne</button>
        <button onClick={handleQ11} className='HomophonesHard-Buttons'>Throne</button>
        <button onClick={handleClick2} className='HomophonesHard-Buttons'>Thrown</button>
      </div>
    </div>
    );
  };

  const exitHard = () => {
    return (
      <div className='HomophonesHard-Parent'>
      <div className='HomophonesHard-Image-Container'>
      <h1 className='HomophonesHard-Congrats'>⭐Congratulations⭐</h1>
      <div className='HomophonesHard-Image11'></div>
      <Link to='/Homophones'>
      <button className='HomophonesHard-Congrats-Button'>Finish</button></Link>
      </div>
    </div>
    );
  };

  const [questionNumber, setQuestionNumber] = useState(1);

  const handleQ2 = () => {
    handleClick();
    setQuestionNumber(2);
  }

  const handleQ3 = () => {
    handleClick();
    setQuestionNumber(3);
  }

  const handleQ4 = () => {
    handleClick();
    setQuestionNumber(4);
  }

  const handleQ5 = () => {
    handleClick();
    setQuestionNumber(5);
  }

  const handleQ6 = () => {
    handleClick();
    setQuestionNumber(6);
  }

  const handleQ7 = () => {
    handleClick();
    setQuestionNumber(7);
  }

  const handleQ8 = () => {
    handleClick();
    setQuestionNumber(8);
  }

  const handleQ9 = () => {
    handleClick();
    setQuestionNumber(9);
  }

  const handleQ10 = () => {
    handleClick();
    setQuestionNumber(10);
  }

  const handleQ11 = () => {
    handleClick3();
    setQuestionNumber(11);
  }

  return (
    <div className='HomophonesHard-Parent'>
      {questionNumber === 1 && firstQuestion()}
      {questionNumber === 2 && secondQuestion()}
      {questionNumber === 3 && thirdQuestion()}
      {questionNumber === 4 && fourthQuestion()}
      {questionNumber === 5 && fifthQuestion()}
      {questionNumber === 6 && sixthQuestion()}
      {questionNumber === 7 && seventhQuestion()}
      {questionNumber === 8 && eighthQuestion()}
      {questionNumber === 9 && ninthQuestion()}
      {questionNumber === 10 && tenthQuestion()}
      {questionNumber === 11 && exitHard()}
    </div>
  )
}

export default HomophonesHard;