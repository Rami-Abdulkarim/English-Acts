import React from 'react';
import './Report.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
import { useState } from 'react';
import Click from "../../Click";

function Report() {
  const [valueFN, setValueFN] = useState("");
  const handleChangeFN = (e) => {
    setValueFN(e.target.value);
  }
  const [valueLN, setValueLN] = useState("");
  const handleChangeLN = (e) => {
    setValueLN(e.target.value);
  }
  const [valueTF, setValueTF] = useState("");
  const handleChangeTF = (e) => {
    setValueTF(e.target.value);
  }
  return (
    <div className='flex'>
      <form onSubmit={()=>{}}>
      <h2 className='Report-h2'>Report An Issue:</h2>
      <h3 className='Report-h3'>Name:</h3>
      <input className='field' type="text" placeholder='Full Name' value={valueFN}
      onChange={handleChangeFN} required></input>
      <h3 className='Report-h3'>Email:</h3>
      <input className='field' type="email" placeholder='Your Email' value={valueLN} 
      onChange={handleChangeLN} required></input>
      <h3 className='Report-h3'>Message:</h3>
      <textarea className='field' rows = "5" placeholder='What Happened?' value={valueTF}
      onChange={(e)=>{ setValueTF(e.target.value);}} required></textarea><br />
      <Link to = "/Settings"><button className='Back-button2' onClick={Click}>
        <IoMdArrowRoundBack className='icon' /> Back</button></Link>
      <button className='Back-button2' onClick={Click}>Submit <IoIosSend className='icon' /></button>
      </form>

      <div>
        <img className="Picture" src = {require('./Developer.png')} alt='Developer Image' />
      </div>
    </div>
  )
}

export default Report;