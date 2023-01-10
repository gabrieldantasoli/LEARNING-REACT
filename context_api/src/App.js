import Alunos from './components/Alunos';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("gabriel")
  return (
    <div className="App">
      <h1>Escola</h1><hr />
      
      <Alunos name={name} setName={setName}/>
    </div>
  );
}

export default App;
