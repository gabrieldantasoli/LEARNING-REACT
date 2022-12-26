import React from "react";

export default function caixa(props) {
    return(
        <>
            <h1>gabriel</h1>
            <p>{props.name}</p>
            {props.children}
        </>
    )
}