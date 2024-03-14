import React from 'react';
import './MatchWI.css';
import { IoExitOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Click from '../../Click';

function MatchWI() {
  return (
    <div className="MatchWI-Parent">
    <div className='MatchWI'>
      <h1>Match Words with Images</h1>
      <h2>Click to play!</h2>
      <div className='MatchWI-Buttons'>
      <Link to="/MatchWIInfo">
      <button onClick={Click}
       className='MatchWI-Button'><FaCircleInfo className='MatchWI-icon' /></button></Link>
      <Link to="/MatchWIPlay">
      <button onClick={Click} className='MatchWI-Button'><FaPlay className='MatchWI-icon' /></button></Link>
      </div>
      <Link to="../Games">
      <button onClick={Click} id='Exit' className='MatchWI-Button'>
        <IoExitOutline className='MatchWI-icon' /></button></Link>
    </div>
    </div>
  )
}

export default MatchWI;