import React from "react";

export default function Dados(props) {
    return (
        <section>
            <p>Name : {props.name}</p>
            <p>Age : {props.age(1,19)}</p>
            <p>Function : {props.function}</p>
            <p>Stats : {props.stats}</p>
        </section>
    )
}