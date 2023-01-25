import React from 'react';
import howiMG from '../images/bg-pattern-how-we-work-desktop.svg'

const Section2 = () => {
  return (
    <div className='container-section2'>
        <div className='left'>
        <h1>Find out more about how we work</h1>
        </div>
        <div className='right'>
          <img src={howiMG} className="HowImg"/>
        <button className='button'>How We Work</button>
        </div>

      
    </div>
  );
}

export default Section2;
