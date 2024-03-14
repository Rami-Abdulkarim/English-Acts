import React from 'react';
import './Credits.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import Click from "../../Click";

function Credits() {
  return (
    <div className='Credits'>
        <ul>
            <li>Created and Designed By: Rami Abdulkarim</li>
        </ul>
        <Link to = "/Settings"><button className='Back-button' onClick={Click}>
          <IoMdArrowRoundBack className='icon' /> Back</button></Link>
    </div>
  )
}

export default Credits;