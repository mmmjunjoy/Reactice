import React, { useState } from 'react';
import Boxx from './checkbox.jsx';



function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(prevState => !prevState);
  }
  
  return (
    <div>
      <button onClick={toggleVisibility}>slect language</button>
      {isVisible && <div><Boxx/></div>}
    </div>
  );
}


export default SearchBar;