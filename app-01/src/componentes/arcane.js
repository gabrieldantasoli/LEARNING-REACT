import React from "react";
import img from "./imgs/arcane.jpg"

export default function arcane() {
    return (
        <section>
            <h2>ARCANE</h2>
            <p> Arcane is my favorite anime Serie.</p>
            <p>Its about a distopic reality , where the war is the king of everyThing.</p>
            <img src={img}></img>
        </section>
    )
}