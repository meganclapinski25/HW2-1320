import React, { useState } from 'react'
import './Newsletter.css'


function NewsLetter(){
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };
    return (
        <div className="newsletter-form">
          {submitted ? (
            <div className="thank-you">
              <h2>Thank You!</h2>
              <p>Your subscription has been received.</p>
            </div>
          ) : (
            <div className="subscription-form">
              <h2>Subscribe to our Newsletter</h2>
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" required />
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="tel" placeholder="Phone Number"  />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          )}
        </div>
      );
    
}
export default NewsLetter