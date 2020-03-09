import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getCountryPermissions} from "./helpers/geolocation"


export const App = ()  => {
  
  const [permited, setPermited] = useState<boolean>(true);
  useEffect(() => {
    let r = getCountryPermissions()
    r.then((result)=>{
      setPermited(result)
    })

  }, [])


  return (
    <div className="App">
     { permited ? <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>: <div></div>}
    </div>
  );
}

export default App;
