import React from 'react';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Click from '../../../Click';

const MatchWIInfo = () => {
  return (
    <div className='MatchWI-Info-Parent'>
      <div className='MatchWI-Info'>
      <h2>How to play?</h2>
      <ol className='MatchWI-Info-Ol'>
        <li>You have to raise your hands before you answer.</li>
        <li>Select the name that best suits the image provided.</li>
        <li>Enjoy!</li>
      </ol>
      <Link to="/MatchWI">
      <button onClick={Click}
       className='MatchWI-Info-Button'><IoMdArrowRoundBack className='MatchWI-icon' /></button></Link>
    </div>
    </div>
  )
}

export default MatchWIInfo;