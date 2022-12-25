import React from "react";
import red from './imgs/red.png'
import green from './imgs/green.png'


export default function controls(props) {
    return(
        <>
            <img src={props.ligado ? green : red} alt=""></img>
            <button onClick={() => props.changeLigado(!props.ligado)}>{props.ligado ? 'desligar' : 'ligar'}</button>
        </>
    )
}