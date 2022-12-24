import React from "react";

export default function relogio() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return(
        <div>
            <p>{day} , {month} , {year}</p>
            <p>{hour} : {minutes} : {seconds}</p>
        </div>
    )
}