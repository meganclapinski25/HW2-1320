import React from 'react';
import './Footer.css'

function Footer () {
  return (
    <div class = "footer">
      <footer>
        <div className='copyright'>
          <p>Copyright to Mitchell Hudson</p>
        </div>
        <p>Join our Mailing List</p>
        <div className='email-bar'>
              <input type = "text" placeholder='Mailing List'/>
              <button type='button'>Enter Email</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;