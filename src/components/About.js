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
        </div>
        <div className='interest-points'>
            <h1>Interest Points</h1>
        </div>
      </div>
    </div>
  )
}

export default About