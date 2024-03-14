import React from 'react';
import './MCQs.css';
import { IoExitOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Click from '../../Click';



function MCQs() {

  return (
    <div className='MCQs-MainPage'>
      <h1 className='MCQs-H1'>Strengthen Your Knowledge!</h1>
      <h3 className='MCQs-H3'>Are you ready to take the challenge?</h3>
      <div className='MCQs-Buttons'>
        <Link to='/MCQsInfo'>
        <button onClick={Click} className='MCQs-Button'><FaCircleInfo className='MCQs-icon' /></button></Link>
        <Link to='/Q1'>
        <button onClick={Click} className='MCQs-Button'><FaPlay className='MCQs-icon' /></button></Link>
      </div>
      <div className='MCQs-Buttons'>
      <Link to='../Games'>
      <button onClick={Click} id='Exit' className='MCQs-Button'>
        <IoExitOutline className='MCQs-icon' /></button></Link>
      </div>
    </div>
  )
}

export default MCQs;