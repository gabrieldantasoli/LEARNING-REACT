import React, { useState , useEffect , useMemo} from 'react';
import './App.css';
import Welcome from './components/comp';
import Equipe from './components/equipe';
import ClassComponent from './components/classComponent'
import Canvas from './components/canvas';
import Form from './components/Form'
import Canvas2 from './components/canvas2';

export default function App() {
  const [name , setName] = useState("Gabriel");
  let equipe = ["Gabriel","Samuel","André"];

  useEffect(() => {
    alert("Changed")
  } , [name])

  //const totalTarefas = useMemo(() => tarefas.length , [tarefas]);
  // processamento

  return (
    <>
      <h1>Olá , Mundo.</h1>
      <Welcome name={name} setName={setName}/>
      <Equipe equipe={equipe}/>
      <hr />

      <h2>Class components !</h2>
      <ClassComponent name="Gabriel"/>
      <hr />

      <Canvas/>
      <hr />

      <Form></Form>

      <Canvas2 />
    </>
  );
}