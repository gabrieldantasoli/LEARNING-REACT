import React,{useState} from 'react';
import './App.css';
import green from './componentes/imgs/green.png'
import red from './componentes/imgs/red.png'
import Numero from './componentes/Numero'
import Clicable from './componentes/clicable'
import Light from './componentes/controls';
import Form from './componentes/form'

function App() {
  const [num,setNum] = useState(10);
  let num2 = 10;
  let [num3,setNum3] = useState(10);

  let [color,setColor] = useState(red);
  let [ligado,changeLigado] = useState(false);

  let [name,setName] = useState("Undefined");

  const cumprimento = () => {
    let hora = new Date().getHours();
    if (hora < 12) return <p>Bom dia</p>
    else if (hora < 18) return <p>boa tarde</p>
    else return <p>Boa noite</p>
  }

  const [log,setLog] = useState(true);

  let number = [1,2,3,4,5,6,7,8,9,10]; 
  let listaNumbers = number.map(
    (c) => <li>{c}</li>
  )

  return (
    <>
      <p>Valor do state num = {num}</p>
      <p>valor do num sem state = {num2}</p>
      <button onClick={() => {setNum(num+10)}}>Soma 10 no num com state</button>
      <button onClick={() => {num2+=10; alert(num2)}}>Soma 10 no sem com state</button>
      <hr></hr> 
      <p>O valor de num3 em app: {num3}</p>
      <Numero num={num3} setNum={setNum3}/>
      <hr></hr>
      <img src={color} alt=""></img>
      <button onClick={() => color === red ? setColor(green) : setColor(red)}>{color === red ? 'ligar' : 'desligar'}</button>
      <hr></hr>
      <Light ligado={ligado} changeLigado={changeLigado}></Light>
      <Clicable></Clicable>

      {cumprimento()}
      <p>{log?'logOut':'logIn'}</p>
      <ul>{listaNumbers}</ul>
      <Form name={name} setName={setName}></Form>
    </>
  );
}

export default App;
