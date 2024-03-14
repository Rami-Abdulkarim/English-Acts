const Click = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/Sounds/Click0.wav');
    audio.play();
};

export default Click;