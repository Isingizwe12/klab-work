import React from 'react';
import {MdFlashOn} from 'react-icons/md';
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'

const section = () => {
  return (
    <div className='container-section'>
        <h1>We're different</h1>
        <div className='section'>
        <div className='content'>
        <MdFlashOn className='icons'/>
        <h2>Snappy Process</h2>
        You can help the VideoLAN project giving some of your time to help the community, to design skins, to translate the documentation, to test and to code. 
        You can also give funds and material to help us. And of course, you can promote VLC media player.
        </div>
        <div className='content'>
        <HiOutlineCurrencyDollar className='icons'/>
        <h2>Affordable Prices</h2>
        You can help the VideoLAN project giving some of your time to help the community, to design skins, to translate the documentation, to test and to code. 
        You can also give funds and material to help us. And of course, you can promote VLC media player.
        </div>
        <div className='content'>
        <FaUserAlt className='icons'/>
        <h2>People First</h2>
        You can help the VideoLAN project giving some of your time to help the community, to design skins, to translate the documentation, to test and to code. 
        You can also give funds and material to help us. And of course, you can promote VLC media player.
        </div>
        </div>
    </div>
  );
}

export default section;
