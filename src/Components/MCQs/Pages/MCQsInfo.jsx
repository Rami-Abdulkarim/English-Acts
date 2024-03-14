import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Click from '../../../Click';

const MCQsInfo = () => {
  return (
    <div className='MCQs-Info-Main'>
      <h1 className='MCQs-Info-H1'>How to play ?</h1>
      <ol className='MCQs-Info-List'>
        <li>You have to answer the question by choosing
            one of the buttons on the screen.</li>
        <li>Simply click to the button that holds the right
            answer for each question.</li>
        <li>You have to raise your hand in order to play.</li>
        <li>You may call the words that are homophones
            in some questions.</li>
        <li>Enjoy!</li>
      </ol>
      <Link to='/MCQs'>
      <button onClick={Click}
       className='MCQs-Info-Button'><IoMdArrowRoundBack className='MCQs-icon' /></button></Link>
    </div>
  )
}

export default MCQsInfo;