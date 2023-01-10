import Alunos from './components/Alunos';
import './App.css';
import { useState } from 'react';

import UserProvider from './contexts/user';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Escola</h1><hr />
        
        <Alunos />
      </div>
    </UserProvider>
  );
}

export default App;