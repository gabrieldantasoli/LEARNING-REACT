import React from "react";

export default function welcome(props) {

    
    props.setName("Gabriel")
    return (
        <p>Bem vindo , {props.name} !</p>
    )
}