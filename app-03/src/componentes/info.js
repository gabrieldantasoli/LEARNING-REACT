import GLobais from "./Globais";
import React from "react";

export default function info() {
    return (
        <>
            <p>{"nome : "+ GLobais.nome}</p>
            <p>{"profissao : "+ GLobais.prof}</p>
            <p>{"ano : "+ GLobais.ano}</p>
        </>
    )
}