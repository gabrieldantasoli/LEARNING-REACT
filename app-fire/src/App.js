import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore , addDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-5lKTX2NBdsOalJAY1sN-yhS-P9rgHYk",
  authDomain: "curso-3e4e9.firebaseapp.com",
  projectId: "curso-3e4e9",
  storageBucket: "curso-3e4e9.appspot.com",
  messagingSenderId: "652362083225",
  appId: "1:652362083225:web:ef2ace39d69bcb97308108",
  measurementId: "G-FNK0CYXLJS"
});


function App() {
  const [titulo, setTitulo] = useState('');
  const [nome, setNome] = useState('');
  const [users, setUsers] = useState([]);

  const database = getFirestore(firebaseApp);
  const postsCollectionRef = collection(database, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      let users = [];
      data.docs.map((doc) => {
        users.push({"nome": doc.data().nome, "titulo": doc.data().titulo})
      });
      setUsers(users);
    }

    getPosts();
  },[]);

  async function handleAdd() {
    const user = await addDoc(postsCollectionRef, {
      nome,
      titulo,
    });
    const data = await getDocs(postsCollectionRef);
      let users = [];
      data.docs.map((doc) => {
        users.push({"nome": doc.data().nome, "titulo": doc.data().titulo})
      });
      setUsers(users);
      setNome("");
      setTitulo("");
  }

  return (
    <div className="App">
      <h1>React JS + Firebase ;)</h1> <br />
      <hr />
      <h2>Cadastrados : </h2>
      <div className='cadastrados'>
        {users.map((item) => {
          return(
            <div>
              <p>{item.nome}</p>
              <p>{item.titulo}</p>
            </div>
          )
        })}
      </div>
      

      <hr />
      <div className='conteiner' >
        <h2>Cadastre novo Objeto : </h2>
        <label>Autor : </label>
        <input type="text" id="input1" value={nome} onChange={(e) => setNome(e.target.value)} autoFocus/>

        <label>Titulo : </label>
        <textarea id='input2' type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} /> 

        <button onClick={handleAdd}>Cadastrar</button>
      </div>

    </div>
  );
}

export default App;
