import React from 'react';
import './Homophones.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const HomophonesNormal = () => {

  const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);

  const correctSound = () => {
    const audio = new Audio (process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const wrongSound = () => {
    const audio2 = new Audio (process.env.PUBLIC_URL + '/Sounds/Wrong.mp3');
    audio2.play();
  };

  const handleClick = () => {
    Swal.fire ({
      title: "Great Job 😄!",
        text: "What a nice knowledge!",
        icon: "success",
        iconColor: "green",
        color: "green",
  });
  correctSound();
  setCorrectAnswerClicked(true);
  };

  const handleClick2 = () => {
    Swal.fire ({
        title: "Wrong Answer 🙁",
        text: "Sorry, try again",
        icon: "error",
        iconColor: "red",
        color: "red",
    });
    wrongSound();
  };

  const firstQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 1/10</h1>
      <div className='HomophonesNormal-Image'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Sea</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Side</button>
        <button onClick={handleQ2} className='HomophonesNormal-Buttons'>See</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Seed</button>
      </div>
    </div>
    );
  };

  const secondQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 2/10</h1>
      <div className='HomophonesNormal-Image2'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleQ3} className='HomophonesNormal-Buttons'>Write</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Right</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Bright</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Might</button>
      </div>
    </div>
    );
  };

  const thirdQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 3/10</h1>
      <div className='HomophonesNormal-Image3'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Rode</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Rude</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Roade</button>
        <button onClick={handleQ4} className='HomophonesNormal-Buttons'>Road</button>
      </div>
    </div>
    );
  };

  const fourthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 4/10</h1>
      <div className='HomophonesNormal-Image4'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Tale</button>
        <button onClick={handleQ5} className='HomophonesNormal-Buttons'>Tail</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Talle</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Tole</button>
      </div>
    </div>
    );
  };

  const fifthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 5/10</h1>
      <div className='HomophonesNormal-Image5'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleQ6} className='HomophonesNormal-Buttons'>Weak</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Week</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Wick</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Weeck</button>
      </div>
    </div>
    );
  };

  const sixthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 6/10</h1>
      <div className='HomophonesNormal-Image6'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Son</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Sune</button>
        <button onClick={handleQ7} className='HomophonesNormal-Buttons'>Sun</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Soon</button>
      </div>
    </div>
    );
  };

  const seventhQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 7/10</h1>
      <div className='HomophonesNormal-Image7'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Tea</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Tie</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Tide</button>
        <button onClick={handleQ8} className='HomophonesNormal-Buttons'>Tied</button>
      </div>
    </div>
    );
  };

  const eighthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 8/10</h1>
      <div className='HomophonesNormal-Image8'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleQ9} className='HomophonesNormal-Buttons'>Red</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Rid</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Read</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Ride</button>
      </div>
    </div>
    );
  };

  const ninthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 9/10</h1>
      <div className='HomophonesNormal-Image9'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Reign</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Raine</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Rane</button>
        <button onClick={handleQ10} className='HomophonesNormal-Buttons'>Rain</button>
      </div>
    </div>
    );
  };

  const tenthQuestion = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1>Question 10/10</h1>
      <div className='HomophonesNormal-Image10'></div>
      </div>
      <div className='HomophonesNormal-Choices'>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Scull</button>
        <button onClick={handleExit} className='HomophonesNormal-Buttons'>Skull</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Scal</button>
        <button onClick={handleClick2} className='HomophonesNormal-Buttons'>Scroll</button>
      </div>
    </div>
    );
  };

  const exitNormal = () => {
    return (
        <div className='HomophonesNormal-Parent'>
      <div className='HomophonesNormal-Image-Countainer'>
      <h1 className='HomophonesNormal-Congrats'>⭐Congratulations⭐</h1>
      <div className='HomophonesNormal-Image11'></div>
      <Link to='/Homophones'>
      <button className='HomophonesNormal-Congrats-Button'>Finish</button></Link>
      </div>
    </div>
    );
  };

  const [questionNumber, setQuestionNumber] = useState(1);

  const handleQ2 = () => {
    handleClick();
    setQuestionNumber(2);
  };

  const handleQ3 = () => {
    handleClick();
    setQuestionNumber(3);
  };

  const handleQ4 = () => {
    handleClick();
    setQuestionNumber(4);
  };

  const handleQ5 = () => {
    handleClick();
    setQuestionNumber(5);
  };

  const handleQ6 = () => {
    handleClick();
    setQuestionNumber(6);
  };

  const handleQ7 = () => {
    handleClick();
    setQuestionNumber(7);
  };

  const handleQ8 = () => {
    handleClick();
    setQuestionNumber(8);
  };

  const handleQ9 = () => {
    handleClick();
    setQuestionNumber(9);
  };

  const handleQ10 = () => {
    handleClick();
    setQuestionNumber(10);
  };

  const handleExit = () => {
    handleClick();
    setQuestionNumber(11);
  }
  
  return (
    <div>
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
      {questionNumber === 11 && exitNormal()}
    </div>
  );
};

export default HomophonesNormal;