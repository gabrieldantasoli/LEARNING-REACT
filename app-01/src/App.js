import Rotas from "./routes";
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/produto">Produto</Link>
        </header>
        
        <Rotas />
      </div>
      
    </>
  );
} 

