import { Link } from "react-router-dom"
import Add from '../../images/plus.png'
import './Home-Style.css';
import Header from "../Header"

// AUtenticacao
import 'firebase/auth';

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

export default () => {
    // Criando database
    const database = getFirestore(firebaseApp);
    // Obtendo a coleção notes no database
    const notesCollectionRef = collection(database, "notes");

    useEffect(() => {
         // Pegando documentos da collection e salvando no users
         const getNotes = async () => {
            const data = await getDocs(notesCollectionRef);
            let objects = [];
            data.docs.map((doc) => {
                objects.push({"name": doc.data().name, "description": doc.data().description, "priority": doc.data().priority, "id": doc.id})
            });
            setObjects(objects);
         }

         getNotes();
    }, [])


    // Variaveis do formularios
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    const [objects, setObjects] = useState([]);

    function add() {
        let doc = document.getElementById("yourNotes");
        if (doc.className != "Adding") {
            doc.className = "Adding";
        } else {
            doc.className = "notAdding";
        }
    }

    async function addObject() {
        // if faz verificacoes
        if (name.trim() === "" || description.trim() === "") {
            alert("Error : Preencha todos os campos!");
            return;
        }
        
        // Add starts here
        const user = await addDoc(notesCollectionRef, {
            name,
            description,
            priority
        });
        // Add ends here

        atualizaObjects();
        console.log(objects)
        setName("");
        setDescription("");
        setPriority(1);
    }

    async function deleteObject(id) {
        // Delete starts here
            const userDoc = doc(database, "notes" , id);
            await deleteDoc(userDoc);
        // Delete ends here

        atualizaObjects();
    }

    async function updateObject(id,prio) {

        // Update starts here
            const novoNome = prompt("Novo Nome : ");
            if (novoNome === null) return;
            const novaDescricao = prompt("Nova Descrição : ");
            if (novaDescricao === null) return;
            const userDoc = doc(database, "notes", id);

            await updateDoc(userDoc, {
                name: novoNome,
                description: novaDescricao,
                priority: prio
            })
        // Update ends here 

        atualizaObjects();
    }

    async function atualizaObjects() {
        //Metodo atualiza o users
        const data = await getDocs(notesCollectionRef);
        let objects = [];
            data.docs.map((doc) => {
                objects.push({"name": doc.data().name, "description": doc.data().description, "priority": doc.data().priority, "id": doc.id})
            }
        );
        setObjects(objects);
    }

    // Autenticacao
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function cadastrarUser() {
        await firebaseApp
    }

    return(
        <div>
            <Header where="/"/>

            <div id="yourNotes" >
                <div className="desc">Your Notes</div>
                <div className="add">
                    <button onClick={add} className="addButton"><img src={Add} /></button>
                </div>
                <div className="addObject">
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    <label>Description : </label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
                    <label>Priority : </label>
                    <input type="number" min="1" max="10" value={priority} onChange={(e) => priority > 10 ? setPriority(10) : setPriority(e.target.value)} />
                    <button onClick={addObject}>Add</button>
                </div>
                <div className="conteiner">
                    {objects.map((object) => {
                        return(
                            <div className="dataObject">
                                <div>
                                    <p>{object.name.length > 15 ? object.name.substring(0,15) + "..." : object.name}</p>
                                    <p>{object.description.length > 15 ? object.description.substring(0,13) + "..." : object.description}</p>
                                </div>
                                <div>
                                    <button className="delete" onClick={() => deleteObject(object.id)}>Dell</button>
                                    <button className="update" onClick={() => updateObject(object.id,object.priority)}>Up</button>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>        
            

           
        </div>
    )
}