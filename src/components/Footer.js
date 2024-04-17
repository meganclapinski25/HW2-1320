import React from 'react';
import './Footer.css'

function Footer () {
  return (
     <footer class="footer">
          <div class="footer-item">
            <p>Copyright to Mitchell Hudson</p>
          </div>
          <div class="mailing-list">
            <p>Join Our Mailing List</p>
            <input type="text" placeholder='Enter Email'/>
            <button type='button'>Subscribe</button>
          </div>
          
            
          
     </footer>

  );
};

export default Footer;