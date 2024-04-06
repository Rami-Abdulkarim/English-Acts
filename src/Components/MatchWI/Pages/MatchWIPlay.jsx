import React from "react";
import { useState, useEffect } from "react";
import Click from '../../../Click';

const Select = ({ expectedValue, onCorrectSelection, reset }) => {
  const [selectedValue, setSelectedValue] = useState("Select");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (reset) {
      setSelectedValue("Select");
      setIsCorrect(false);
    }
  }, [reset]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === expectedValue && !isCorrect) {
      setIsCorrect(true);
      onCorrectSelection();
      Click();
    }
  };

  return (
    <select onChange={handleChange} value={selectedValue} className="MatchWIPlay-Select">
      <option className="MatchWIPlay-Option" value="Select">
        Select
      </option>
      <option key={"Dolphin"} className="MatchWIPlay-Option" value="Dolphin">
        Dolphin
      </option>
      <option key={"Fox"}  className="MatchWIPlay-Option" value="Fox">
        Fox
      </option>
      <option key={"Bear"}  className="MatchWIPlay-Option" value="Bear">
        Bear
      </option>
      <option key={"Elephant"}  className="MatchWIPlay-Option" value="Elephant">
        Elephant
      </option>
      <option key={"Snake"}  className="MatchWIPlay-Option" value="Snake">
        Snake
      </option>
    </select>
  );
};

const MatchWIPlay = () => {
  const markSound = () => {
  const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/MatchWISounds/Mark.mp3');
  audio.play();
  };

  const [add, setAdd] = useState(0);

  const handleCorrectSelection = () => {
    if (add < 5) {
      setAdd(add + 1);
      markSound();
    }
  };

  const [reset, setReset] = useState(false);
  const handleChangeReset = () => {
    setAdd(0);
    Click();
    setReset(prevReset => !prevReset);
  };

  return (
    <div className="MatchWIPlay-Parent">
      <div className="MatchWIPlay-Parent-Container">
        <div className="MatchWIPlay-Containers">
        <div className="MatchWIPlay-Container1">
          <div className="MatchWIPlay-Img">
            <img
              className="MatchWIPlay-Picture"
              src={require("../img/Bear.png")}
              alt=""
            />
            <div className="MatchWIPlay-Adjust1">
              <Select expectedValue="Bear" onCorrectSelection={handleCorrectSelection} reset={reset} />
            </div>
          </div>
          <div className="MatchWIPlay-Img">
            <img
              className="MatchWIPlay-Picture"
              src={require("../img/Fox.png")}
              alt=""
            />
            <div className="MatchWIPlay-Adjust1">
              <Select expectedValue="Fox" onCorrectSelection={handleCorrectSelection} reset={reset} />
            </div>
          </div>
        </div>

        <div className="MatchWIPlay-Container2">
          <div className="MatchWIPlay-Img">
            <img
              className="MatchWIPlay-Picture"
              src={require("../img/Dolphin.jpeg")}
              alt=""
            />
            <div className="MatchWIPlay-Adjust2">
              <Select expectedValue="Dolphin" onCorrectSelection={handleCorrectSelection} reset={reset} />
            </div>
          </div>
          <div className="MatchWIPlay-Img">
            <img
              className="MatchWIPlay-Picture"
              src={require("../img/Snake.png")}
              alt=""
            />
            <div className="MatchWIPlay-Adjust2">
              <Select expectedValue="Snake" onCorrectSelection={handleCorrectSelection} reset={reset} />
            </div>
          </div>
        </div>

        <div className="MatchWIPlay-Container3">
          <div className="MatchWIPlay-Img">
            <img
              className="MatchWIPlay-Picture"
              src={require("../img/Elephant.png")}
              alt=""
            />
            <div className="MatchWIPlay-Adjust3">
              <Select expectedValue="Elephant" onCorrectSelection={handleCorrectSelection} reset={reset} />
            </div>
          </div>
        </div>
        </div>

        <div className="MatchWIPlay-ContainerResult">
          <fieldset>
            <h1>Result: {add}⭐</h1>
            <button onClick={handleChangeReset} className="MatchWIPlay-ContainerResult-Button">Reset</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default MatchWIPlay;
