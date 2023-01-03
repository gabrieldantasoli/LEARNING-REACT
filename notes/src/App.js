// Importando css do app
import './App.css';

// Importando as rotas do site
import Rotas from './routes';

// Bibliotecas useState e useEffect
import { useEffect, useState } from 'react';

// Bibliotecas usadas pelo firebase
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore , addDoc , doc, deleteDoc , updateDoc } from "firebase/firestore";

// Inicializando firebase
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


  return (
    <div className="App">
      <Rotas />
    </div>
  );
}

export default App;
