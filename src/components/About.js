import React from 'react'
import './About.css'; 

function About() {
  return (
    <div>
      <div className='container'>
        <div className='image'>
        <img src={process.env.PUBLIC_URL + '/images/img2.jpeg'} /> 
        </div>
        <div className='about-me'>
            <h1>About SFPOPOS</h1>
            <p>POPOS are publicly accessible spaces in
              forms of plazas, terraces, atriums, small
              parks, and even snippets which are provided
              and maintained by private developers. In San
              Francisco, POPOS mostly appear in the Downtown
              office district area.</p>
        </div>
        
      
      </div>
      <div className='container'>
        <div className='amenities'>
            <h1>Amenities</h1>
            <ul className='items'>
              <li>
              🌲 - Enjoy fresh air and chirping birds
              </li>
              <li>
	            ☕️ - Get a cup of coffee to stay engerized
              </li>
              <li>
	          	🖼 - Unwind and ponder at the sight of art pieces
              </li>
              <li>
	          	🚽 - Don't be worried on your journey
              </li>
              <li>
	            🔌 - Charge you phones to take pictures, or your laptops to do work 
              </li>
            </ul>
        </div>
        <div className='interest-points'>
            <h1>Interest Points</h1>
            <ul className='items'>
              <li>TransAmerica Pyramid</li>
              <li>The Ferry Building</li>
              <li>SalesForce Tower</li>
              <li> Old St. Mary's Cathedral</li>
              <li>Bart - Embarcadero</li>
              <li>Bart - Montgomery St</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About