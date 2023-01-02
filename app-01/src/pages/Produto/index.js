import React from "react";
import { Link , useParams } from "react-router-dom";

export default function Produto() {
    const { id } = useParams();

    return(
        <div>
            <h1>Bem vindo ao Produto!</h1>
            <p>Produto selecionado : {id} !</p>
            <Link to="/">Home</Link>
        </div>
    )
}