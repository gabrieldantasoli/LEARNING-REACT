import React,{useState,useEffect} from 'react';
import Caixa from './componentes/caixa'
import Canal from './componentes/canal'
import Classe from './componentes/classe'
import Carro from './componentes/carro'
import BaseClasse from './componentes/BaseClasse'
import Info from './componentes/info';
import GLobais from './componentes/Globais';
import page1 from './componentes/page1';
import page2 from './componentes/page2';
import './App.css';

function App() {

  const [cont,incCont] = useState(0)

  useEffect(
    () => {
      const url = window.location.href;
      const res = url.split('?');
      setPage(res[1]);
      alert("ok")
    }
  )

  localStorage.setItem("nome","gabriel");
  localStorage.getItem("nome");
  localStorage.removeItem("nome");


  const [page,setPage] = useState(0)

  const linksPages = (p) => {
    if (p===1) {
      window.open('http://localhost:3000?1','_self')
    }else if (p===2){
      window.open('http://localhost:3000?2','_self')
    }
  }

  const retornarPage = () => {
    if (page === 1) {
      return <page1/>
    } else if (page === 2) {
      return <page2/>
    } else {
      return  <div>
                <button onClick={() => linksPages(1)}>PAge 1</button>
                <button onClick={() => linksPages(2)}>PAge 2</button>
              </div>
    }
  }



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

      {retornarPage()}
    </>
  );
}

export default App;
