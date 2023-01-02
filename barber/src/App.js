//import React, { useState , useEffect } from 'react';
//import './App.css'
//import All from './all'
import Routes from './routes';

export default function App() {
  /*const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadAPI() {
      fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
    }

    loadAPI();
  } , []);*/

  return (
    <Routes />
  );
}