import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import Click from '../../../Click';

const Q5 = () => {
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);

  const correctSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const wrongSound = () => {
    const audio2 = new Audio(process.env.PUBLIC_URL + '/Sounds/Wrong.mp3');
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
  }

  const handleClick2 = () => {
    Swal.fire({
      title: "Wrong Answer 🙁",
      text: "Sorry, try again.",
      icon: "error",
      iconColor: "red",
      color: "red"
  });
  wrongSound();
  }

  return (
    <div className='MCQs-Q-Main'>
      <h1 className='MCQs-Q-H1'>Most major cities ............. significantly
      over the last 30 years.</h1>
      <div className='MCQs-Q-img1'></div>
      <div className='MCQs-Q-Buttons1'>
        <button onClick={handleClick2} className='MCQs-Q-Button'>A.grew</button>
        <button onClick={handleClick2} className='MCQs-Q-Button'>B.had grown</button>
      </div>
      <div className='MCQs-Q-Buttons2'>
        <button onClick={handleClick} className='MCQs-Q-Button'>C.have grown</button>
        <button onClick={handleClick2} className='MCQs-Q-Button'>D.will grow</button>
      </div>
      <div className='MCQs-Q-Buttons3'>
        <Link to='/MCQs'>
        <button disabled={!correctAnswerClicked} onClick={Click} className='MCQs-Q-Next-Button'>Finish <GrFormNextLink /></button></Link>
      </div>
    </div>
  )
}

export default Q5;