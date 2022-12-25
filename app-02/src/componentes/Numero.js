import React from "react";

export default function Numero(props) {
    return (
        <>
            <p>O valor de num3 em Numero = {props.num}</p>
            <button onClick={() => props.setNum(props.num+10)}>somar 10</button>
        </>
    )
}