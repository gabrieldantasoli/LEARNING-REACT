import React, { useState } from 'react';
import './App.css';
import Welcome from './components/comp';
import Equipe from './components/equipe';
import ClassComponent from './components/classComponent'
import Canvas from './components/canvas';

export default function App() {
  const [name , setName] = useState("Gabriel");
  let equipe = ["Gabriel","Samuel","André"];

  return (
    <>
      <h1>Olá , Mundo.</h1>
      <Welcome name={name} setName={setName}/>
      <Welcome name="Samuel"/>
      <Equipe equipe={equipe}/>
      <hr />

      <h2>Class components !</h2>
      <ClassComponent name="Gabriel"/>
      <hr />

      <Canvas/>
    </>
  );
}