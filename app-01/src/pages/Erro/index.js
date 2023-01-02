import React from "react";
import { Link } from "react-router-dom";

export default function Erro() {
    return(
        <div>
            <h1>Page Not Found : Error 404.</h1>
            <Link to="/">Home</Link>
        </div>
    )
}