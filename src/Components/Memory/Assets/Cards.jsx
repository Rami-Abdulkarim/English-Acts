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
        { id: 1, img: process.env.PUBLIC_URL + '/img/Cat.png', stat: "", alt: "Cat" },
        { id: 1, img: process.env.PUBLIC_URL + '/img/Cat.png', stat: "", alt: "Cat" },
        { id: 2, img: process.env.PUBLIC_URL + '/img/Crocodile.jpeg', stat: "", alt: "Crocodile" },
        { id: 2, img: process.env.PUBLIC_URL + '/img/Crocodile.jpeg', stat: "", alt: "Crocodile" },
        { id: 3, img: process.env.PUBLIC_URL + '/img/Dog.jpeg', stat: "", alt: "Dog" },
        { id: 3, img: process.env.PUBLIC_URL + '/img/Dog.jpeg', stat: "", alt: "Dog" },
        { id: 4, img: process.env.PUBLIC_URL + '/img/Girafee.jpeg', stat: "", alt: "Girafee" },
        { id: 4, img: process.env.PUBLIC_URL + '/img/Girafee.jpeg', stat: "", alt: "Girafee" },
        { id: 5, img: process.env.PUBLIC_URL + '/img/Goat.jpeg', stat: "", alt: "Goat" },
        { id: 5, img: process.env.PUBLIC_URL + '/img/Goat.jpeg', stat: "", alt: "Goat" },
        { id: 6, img: process.env.PUBLIC_URL + '/img/Hen.png', stat: "", alt: "Hen" },
        { id: 6, img: process.env.PUBLIC_URL + '/img/Hen.png', stat: "", alt: "Hen" },
        { id: 7, img: process.env.PUBLIC_URL + '/img/Sheep.jpeg', stat: "", alt: "Sheep" },
        { id: 7, img: process.env.PUBLIC_URL + '/img/Sheep.jpeg', stat: "", alt: "Sheep" },
        { id: 8, img: process.env.PUBLIC_URL + '/img/Tiger.png', stat: "", alt: "Tiger" },
        { id: 8, img: process.env.PUBLIC_URL + '/img/Tiger.png', stat: "", alt: "Tiger" }
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