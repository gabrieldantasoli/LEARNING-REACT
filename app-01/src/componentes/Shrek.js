import React from "react";
import img1 from './imgs/R.jpg'

export default function section() {
    return(
        <section id="shrek">
            <h2>Shrek</h2>
            <p>Shrek is my favorite  DreamWorks Animation!</p>
            <p>I love its so much...</p>
            <img src={img1}></img>
            <img src="open.jpg"></img>
        </section>
    )
}