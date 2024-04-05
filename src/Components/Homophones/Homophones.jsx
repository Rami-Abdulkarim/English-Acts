import React from "react";
import "./Homophones.css";
import { FaCircleInfo } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Homophones = () => {
  return (
    <div className="Homophones-Parent">
      <h1 className="Homophones-H1">Homophones King 👑</h1>
      <div className="Homophones-Container">

        <div className="Homophones-Set">
          <Link to= '/HomophonesInfo'>
          <button className="Homophones-Main-Button"><FaCircleInfo className="Homophones-Main-Icon" />
          </button></Link>
          <h3 className="Homophones-Main-Text">Instructions</h3>
        </div>

        <div className="Homophones-Set">
          <Link to="/HomophonesNormal">
          <button className="Homophones-Main-Button"><FaPlay className="Homophones-Main-Icon" />
          </button></Link>
          <h3 className="Homophones-Main-Text">Normal Mode</h3>
        </div>

        <div className="Homophones-Set">
          <Link to="/HomophonesHard">
          <button className="Homophones-Main-Button"><FaPlay className="Homophones-Main-Icon"/>
          </button></Link>
          <h3 className="Homophones-Main-Text">Hard Mode</h3>
        </div>
      </div>
      
      <div className="Homophones-Set">
      <Link to='../Games'>
          <button className="Homophones-Main-Button"><IoExitOutline className="Homophones-Main-Icon"/>
          </button></Link>
          <h3 className="Homophones-Main-Text">Exit</h3>
        </div>
    </div>
  );
};

export default Homophones;
