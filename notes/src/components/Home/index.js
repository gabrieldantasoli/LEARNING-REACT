import { Link } from "react-router-dom"
import Add from '../../images/plus.png'

import './Home-Style.css';

import Header from "../Header"

export default () => {

    function add() {
        let doc = document.getElementById("yourNotes");
        if (doc.className != "Adding") {
            doc.className = "Adding";
        } else {
            doc.className = "notAdding";
        }
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
                    <input type="text" /> <br />
                    <label>Description : </label>
                    <textarea type="text" /> <br />
                    <label>Priority : </label>
                    <input type="number" />
                    <button >Add</button>
                </div>
                <div className="conteiner">

                </div>
            </div>
        </div>
    )
}