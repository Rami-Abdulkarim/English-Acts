import React from 'react';
import './Homophones.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const HomophonesInfo = () => {
  return (
    <div className='HomophonesInfo-Parent'>
      <h1 className='HomophonesInfo-H1'><u>Instructions</u></h1>
      <ol className='HomophonesInfo-Ol'>
        <li>There are two modes: 'Normal' and 'Hard'. The hard mode will open once you finish the
        normal one.</li>
        <li><u>Normal Mode:</u> You have 10 questions. Try to answer them correctly to win.</li>
        <li><u>Hard Mode:</u> You have another 10 questions. However, you have to challenge 
        yourself and answer the questions in a short time.</li>
        <li><u>Hard Mode:</u> You have 5 seconds for each question to answer correctly or you'll quit
        automatically. "(Coming Soon!)"</li>
      </ol>
      <Link to="/Homophones">
      <button className='HomophonesInfo-Button'><IoMdArrowRoundBack className='HomophonesInfo-Icon' /></button></Link>
    </div>
  )
}

export default HomophonesInfo;