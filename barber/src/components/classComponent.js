import React from "react";

export default class Equipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }

    /*state = {
        name: "Gabriel",
    }*/

    componentDidMount() {
        alert("Componente montado , " + this.props.name);
    }

    render() {
        return (
            <div>
                <p>Works , {this.props.name}!!!</p>
            </div>
        );
    }
}