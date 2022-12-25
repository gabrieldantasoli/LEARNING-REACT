import React from "react";

export default function soma(props) {
    let media = (parseFloat(props.n.n1) + parseFloat(props.n.n2) + parseFloat(props.n.n3) + parseFloat(props.n.n4)) / 4;
    alert(media)
    return (
        <>
            <p>{parseFloat(props.n.n1)} + {parseFloat(props.n.n2)} + {parseFloat(props.n.n3)} + {parseFloat(props.n.n4)}</p>
        </>
    )
}
