import React, { useState } from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json';

function POPOSList() {
  const [query, setQuery] = useState('');
  
  const spaces = data
    .filter(obj => obj.title.includes(query) || obj.address.includes(query))
    .map(({ title, address, images, hours }, i) => (
      <POPOSSpace
        key={title}
        id={i} // added new prop id here!
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    ));

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;
