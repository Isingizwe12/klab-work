import React from 'react';
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    
 <header className='header'>
    
     <div className="nav">
                <ul>
                  <div>
                    <li>INSURE</li>
                  </div>
                  <span>
                    <li>HOW WE WORK</li>
                    <li>BLOG</li>
                    <li>ACOUNT</li>
                    <li className='button'>VIEW PLANS</li>
                  </span>
                  <div className='menu'>
                    <FaBars/>
                  </div>
                </ul>
            </div>

    
  </header>
  );
}


export default Header;
