import React from 'react';
import Swal from 'sweetalert2';
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import Click from '../../../Click';

const Q2 = () => {
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
      <h1 className='MCQs-Q-H1'>When you phoned, I ……………….. a shower.</h1>
      <div className='MCQs-Q-img1'></div>
      <div className='MCQs-Q-Buttons1'>
        <button onClick={handleClick2} className='MCQs-Q-Button'>A.am taking</button>
        <button onClick={handleClick} className='MCQs-Q-Button'>B.was taking</button>
      </div>
      <div className='MCQs-Q-Buttons2'>
        <button onClick={handleClick2} className='MCQs-Q-Button'>C.had</button>
        <button onClick={handleClick2} className='MCQs-Q-Button'>D.have</button>
      </div>
      <div className='MCQs-Q-Buttons3'>
        <Link to='/Q3'>
        <button onClick={Click} className='MCQs-Q-Next-Button'>Next <GrFormNextLink /></button></Link>
      </div>
    </div>
  )
}

export default Q2;