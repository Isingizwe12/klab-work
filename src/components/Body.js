import React from 'react';
import Image from './image-intro-desktop.jpg'
import Img from '../images/bg-pattern-intro-right-desktop.svg'
import LeftImg from '../images/bg-pattern-intro-left-desktop.svg'
import {AiOutlineLine} from 'react-icons/ai'


const Body = () => {
  return (
    <div className='container'>
      
      <div className='left'>
      <hr />
        <h1>Hummanizing your insurance</h1>
        <p className='info'>lorem You can help the VideoLAN project giving some of your time to help the community, to design skins, to translate the documentation, to test and to code.
             You can also give funds and material to help us. And of course, you can promote VLC media player.</p>
        <button>VIEW PLANS</button>
        <img src={LeftImg} className='Leftpatern'/>
      </div>

      <div className='right'>
        <img src={Image}/>
      </div>
        <img src={Img} className='patern'/>
      
    </div>
  );
}

export default Body;
