import React from 'react';
import './Instructions.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import Click from "../../Click";

function Instructions() {
  return (
    <div className='Instructions'>
        <h3 className='Instructions-h3'>Instructions:</h3>
        <ol className='Instructions-ol'>
            <li>Welcome to our website!</li>
            <li>"Home" section provides an overview text about this website.</li>
            <li>"Games" section provides you with the games that can be used in your class
              activities.</li>
            <li>In case of any bug or problem, kindly leave a report in
              "Settings" then "Report".</li>
            <li>Enjoy!</li>
        </ol>

        <Link to = "/Settings"><button className='Back-button3' onClick={Click}>
          <IoMdArrowRoundBack className='icon' /> Back</button></Link>
    </div>
  )
}

export default Instructions;