import React from "react";

export default (props) => {
    return (
        <>
            {props.equipe.map((name) => {
                return <p>Nome : {name} !</p>
            })}
        </>
    )
}