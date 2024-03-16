//rfce
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <h1 className='Home-h1'>Welcome To The World Of English Activities!</h1>
    <div className='Home'>
      <div>
      <h3 className='Home-h3'>What will you find?</h3>
      <p className='Home-p'>-Here, You'll find a wide variety of online activities related to English lessons and will make
        your learning experience more accessible and modern.
      </p><br />
      <p className='Home-p'>-By differentiating your teaching process, you can teach students with different needs in a very
        entertaining and attractive games appropriate for your classroom environment.
      </p><br />
      <p className='Home-p'>-This website is free to use and has no copyright reserved content. Feel
      free to use it anywhere, and anytime!</p>
      </div>
      <div className="Home-Picture-Container">
      <img className="Home-Picture" src = {require('./Images/happy-children.jpg')} alt='Happy Kids' />
      </div>
    </div>
    </div>
  )
}

export default Home;