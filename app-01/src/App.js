import './App.css';
import Shrek from './componentes/Shrek'
import Arcane from './componentes/arcane'
import Beliver from './componentes/believer'
import Dados from './componentes/dados'
import Relogio from './componentes/relogio'

export default function App() {
  let stats = "happy";
  let fun = (a,b) => {
    return a + b
  }

  return (
    <>
      <Shrek/>
      <Arcane/>
      <Beliver/>
      <Dados age={fun} name="gdo" function="coder" stats={stats}/>
      <Dados age={fun} name="sgdo" function="kid" stats={stats}/>
      <Relogio/>
    </>
  );
} 

