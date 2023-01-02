import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h1>Bem vindo ao Home!</h1>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}