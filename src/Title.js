import React from 'react'
import './Title.css';
import Navbar from './NavBar';


function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Francisco's Privately Owned Public Spaces</div>
      <Navbar /> 
    </div>
  );
}


export default Title