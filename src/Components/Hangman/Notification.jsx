import React from 'react';
import { useEffect } from 'react';

const Notification = ({ showNotification }) => {
  const notiSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click5.wav');
    audio.play();
  };
  useEffect(() => {
    if (showNotification) {
      notiSound();
    }
  }, [showNotification]);
  return (
    <div className={`Hangman-notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification;