import React,{useState,useEffect} from 'react';
import Caixa from './componentes/caixa'
import Canal from './componentes/canal'
import Classe from './componentes/classe'
import Carro from './componentes/carro'
import BaseClasse from './componentes/BaseClasse'
import Info from './componentes/info';
import GLobais from './componentes/Globais';
import './App.css';

function App() {

  const [cont,incCont] = useState(0)

  useEffect(
    () => {
      console.log(`pagina atualisada ` + cont + ` vezes!`)
      document.title = "contagem " + cont
    }
  )

  localStorage.setItem("nome","gabriel");
  localStorage.getItem("nome");
  localStorage.removeItem("nome");

  return (
    <>
      <Caixa name="Gabriel dantas de Oliveira">
        <p>I love boxes!</p>
        <p>Lorem ipsum dolor amen salahs dshds.</p>
        <Canal></Canal>
      </Caixa>
      <hr/>

      <p>CONTAGEM : {cont}</p>
      <button onClick={() => incCont(cont+1)}>CONTAR</button>
      <hr/>

      <Classe name="gabriel dantas de oliveira"></Classe>
      <Carro fator={15} car="onix" cor="branco"/>
      <hr/>

      <BaseClasse></BaseClasse>
      <hr/>

      <p>{"nome : "+ GLobais.nome}</p>
      <p>{"profissao : "+ GLobais.prof}</p>
      <p>{"ano : "+ GLobais.ano}</p>
      <Info/>
    </>
  );
}

export default App;
