import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Games from './Components/Games.jsx';
import Settings from './Components/Settings.jsx';
import './Components/Settings.css';
import Credits from './Components/Settings/Credits.jsx';
import Instructions from './Components/Settings/Instructions.jsx';
import Report from './Components/Settings/Report.jsx';
import { IoMdSettings } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import MCQs from './Components/MCQs/MCQs.jsx';
import TicTacToe from './Components/TicTacToe/TicTacToe.jsx';
import TypeTheWord from './Components/TypeTheWord/TypeTheWord.jsx';
import MatchWI from './Components/MatchWI/MatchWI.jsx';
import Hangman from './Components/Hangman/Hangman.jsx';
import MCQsInfo from './Components/MCQs/Pages/MCQsInfo.jsx';
import Q1 from './Components/MCQs/Pages/Q1.jsx';
import Q2 from './Components/MCQs/Pages/Q2.jsx';
import Q3 from './Components/MCQs/Pages/Q3.jsx';
import Q4 from './Components/MCQs/Pages/Q4.jsx';
import Q5 from './Components/MCQs/Pages/Q5.jsx';
import Memory from './Components/Memory/Memory.jsx';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";
import MatchWIInfo from "./Components/MatchWI/Pages/MatchWIInfo.jsx";
import MatchWIPlay from "./Components/MatchWI/Pages/MatchWIPlay.jsx";
import Click from "./Click.jsx";
import SyllablesFinder from './Components/SyllablesFinder/SyllablesFinder.jsx';

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h3 style={{ color: theme !== "light" ? "black" : "white" }}>{children}</h3>
  );
};

const Header = () => {
  return (
    <header onClick={Click}>
      <Title>
        <CiDark id='icon-phone1' className='Switch-icons' /> <Switch className='Switch-icons' 
        /> <CiLight id='icon-phone2' className='Switch-icons' />
      </Title>
    </header>
  );
};

const Content = ({children}) => {
  const {theme} = useTheme();
  return (
    <div style={{color: theme === "light" ? "green" : "white"}}>{children}</div>
  );
};

const Everything = () => {
  return (
      <Content>
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Games" element = {<Games />} />
        <Route path="/Settings" element = {<Settings />} />
        <Route path='/Credits' element = {<Credits />} />
        <Route path='/Instructions' element = {<Instructions />} />
        <Route path='/Report' element = {<Report />} />
        <Route path='/Hangman' element = {<Hangman />} />
        <Route path='/MCQs' element = {<MCQs />} />
        <Route path='/TicTacToe' element = {<TicTacToe />} />
        <Route path='/TypeTheWord' element = {<TypeTheWord />} />
        <Route path='/MatchWI' element = {<MatchWI />} />
        <Route path='/MatchWIInfo' element = {<MatchWIInfo />} />
        <Route path='/MatchWIPlay' element={<MatchWIPlay />} />
        <Route path='/MCQsInfo' element = {<MCQsInfo />} />
        <Route path='/Q1' element = {<Q1 />} />
        <Route path='/Q2' element = {<Q2 />} />
        <Route path='/Q3' element = {<Q3 />} />
        <Route path='/Q4' element = {<Q4 />} />
        <Route path='/Q5' element = {<Q5 />} />
        <Route path='/Memory' element = {<Memory />} />
        <Route path='/SyllablesFinder' element = {<SyllablesFinder />} />
      </Routes>
      </Content>
  );
};


function App() {
  const { theme } = useTheme();
  return (
    <div className="App"
    style={{
      backgroundColor: theme === "light" ? "white" : "black",
    }}>
      <div className='nav-container'>
        <h2 className='nav-item nav-title'>Rami.</h2>
        <Header />
        <Link to='/' className='nav-item' onClick={Click}><IoHomeSharp className='icon1' />Home</Link>
        <Link to='/Games' className='nav-item' onClick={Click}><IoGameController className='icon1' />Games</Link>
        <Link to='/Settings' className='nav-item' onClick={Click}><IoMdSettings className='icon1' />Settings</Link>
      </div>
      <Everything />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
