import React from 'react';
import {useState} from 'react';
import Card from './Card';

const Cards = () => {
  const memorySound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click4.wav');
    audio.play();
  };

  const correctSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Correct.mp3');
    audio.play();
  };

  const wrongSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click5.wav');
    audio.play();
  };

    const [items, setItems] = useState([
        { id: 1, img: '/img/Cat.png', stat: "" },
        { id: 1, img: '/img/Cat.png', stat: "" },
        { id: 2, img: '/img/Crocodile.jpeg', stat: "" },
        { id: 2, img: '/img/Crocodile.jpeg', stat: "" },
        { id: 3, img: '/img/Dog.jpeg', stat: "" },
        { id: 3, img: '/img/Dog.jpeg', stat: "" },
        { id: 4, img: '/img/Girafee.jpeg', stat: "" },
        { id: 4, img: '/img/Girafee.jpeg', stat: "" },
        { id: 5, img: '/img/Goat.jpeg', stat: "" },
        { id: 5, img: '/img/Goat.jpeg', stat: "" },
        { id: 6, img: '/img/Hen.png', stat: "" },
        { id: 6, img: '/img/Hen.png', stat: "" },
        { id: 7, img: '/img/Sheep.jpeg', stat: "" },
        { id: 7, img: '/img/Sheep.jpeg', stat: "" },
        { id: 8, img: '/img/Tiger.png', stat: "" },
        { id: 8, img: '/img/Tiger.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1);

    function check(current) {
      if (items[current].id === items[prev].id) {
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        setPrev(-1);
        correctSound();
    } else {
      items[current].stat = "wrong"
      items[prev].stat = "wrong"
      setItems([...items])
      setTimeout(() => {
        items[current].stat = ""
      items[prev].stat = ""
      setItems([...items])
      setPrev(-1);
      }, 1000)
      wrongSound();
    }
  }

    function handleClick(id) {
      if (prev === -1) {
        items[id].stat = "active"
        setItems([...items])
        setPrev(id);
      } else {
        check(id);
    }
    memorySound();
  }

  return (
    <div className='Memory-Container'>
        {items.map((item, index) => (
            <Card key={index} item = {item} id={index} handleClick={handleClick} />
        ))}
    </div>
  )
}

export default Cards;