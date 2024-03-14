import React from 'react';
import './Memory.css';
import Cards from './Assets/Cards.jsx';

const Memory = () => {
  return (
    <div className='Memory-Main'>
      <h1 className='Memory-H1'>Memory Game</h1>
      <Cards />
    </div>
  )
}

export default Memory;