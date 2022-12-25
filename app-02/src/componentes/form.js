import React from 'react';

export default function form(props) {

    return(
        <>
            <form>
                <label>Digite seu nome : </label>
                <input type="text" id="name" onChange={(e) => props.setName(e.target.value)}/>
                <p>Nome digitado : {props.name}</p>
            </form>
        </>
    )
}