import React from "react";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaInfo } from "react-icons/fa6";
import { IoFileTraySharp } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";
import Click from "../Click";

function Settings() {
  return (
    <div className="Settings-buttons">
      <div>
        <button className="Settings-button" disabled={true}>
          Sound <IoIosMusicalNotes className="icon" />
        </button>
        <Link to="/Instructions">
          <button className="Settings-button" onClick={Click}>
            Instructions <FaInfo className="icon1" />
          </button>
        </Link>
        <Link to="/Credits">
          <button className="Settings-button" onClick={Click}>
            Credits <IoFileTraySharp className="icon" />
          </button>
        </Link>
        <Link to="/Report">
          <button className="Settings-button" onClick={Click}>
            Report <MdReportGmailerrorred className="icon" />
          </button>
        </Link>
        <p className="Settings-p">@Rami's Jolly Learning Activities.</p>
      </div>
    </div>
  );
}

export default Settings;
