import React from "react";

export default function nota(props) {
    let soma = (e) => {
        if (props.num === 1){
            props.setNotas({"n1": e.target.value,"n2": props.n2,"n3": props.n3,"n4": props.n4})
        }else if (props.num === 2){
            props.setNotas({"n1": props.n1,"n2": e.target.value,"n3": props.n3,"n4": props.n4})
        }else if (props.num === 3){
            props.setNotas({"n1": props.n1,"n2": props.n2,"n3": e.target.value,"n4": props.n4})
        }else if (props.num === 4){
            props.setNotas({"n1": props.n1,"n2": props.n2,"n3": props.n3,"n4": e.target.value})
        }
    }
    return(
        <>
            <label>Nota {props.num} :  </label>
            <input type="text" onChange={(e) => soma}></input><br/>
        </>
    )
}