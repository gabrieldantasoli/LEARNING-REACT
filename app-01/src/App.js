import './App.css';
import Shrek from './componentes/Shrek'
import Arcane from './componentes/arcane'
import Beliver from './componentes/believer'
import Dados from './componentes/dados'

export default function App() {
  let stats = "happy";

  return (
    <>
      <Shrek/>
      <Arcane/>
      <Beliver/>
      <Dados age="19" name="gdo" function="coder" stats={stats}/>
      <Dados age="14" name="sgdo" function="kid" stats={stats}/>
    </>
  );
} 

