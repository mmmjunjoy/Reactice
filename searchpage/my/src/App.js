import React from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react';
import SearchBar from './searchbar.component.jsx';




function App() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div className='App'>

   
      <input type = "text"
       placeholder='Search...' 
       onChange={event => {
        setSearchTerm(event.target.value);
      }}
    />
    <SearchBar />
    {JSONDATA.filter((val)=>{
      if (searchTerm == ""){
        return val
      }else if(val.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }

    }).map((val,key)=>{
      return (
        <div className="user" key ={key}>
          <p>{val.first_name}</p>
        </div>
      );
    })}
    </div>
  );
}

export default App;
