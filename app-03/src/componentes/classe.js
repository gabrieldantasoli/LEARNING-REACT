import React from "react";

export default class Classe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>USANDO CLASSES EM REACT!</h1>
                {this.info()}
                <p>Nome = {this.props.name}</p>
            </>
        )
    }

    info() {
        return <p>Metodo info()</p>
    }
}

//export default Classe;