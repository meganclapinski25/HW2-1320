import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from './RandomSpace/RandomSpace'




function Title() {
  return (
    <div className="Title">
        <div className='titles'>
          <h1>SFPOPOS</h1>
          <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
        </div>
        <div className='items' >
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
            <RandomSpace /> 
            {/* when button is active make it responsive */}
            
        </div>
          <div className='search-bar'>
              <input type = "text" placeholder='Search'/>
              <button type='button'>Search</button>
          </div>
      
    </div>
  );
}

export default Title