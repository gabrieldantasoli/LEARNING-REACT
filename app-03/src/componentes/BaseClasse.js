import React from "react";

export default class BaseClasse extends React.Component {
    constructor(props) {
        // permitir o uso de props
        super(props);

        //useState
        this.state = {
            nome: "gabriel dantas",
            idade: 19,
            curso: "C, Comput",
            ativo: true,
        }

        //bindagem
        let ca = this.changeActive.bind(this)
    }

    changeActive() {
        this.setState(
            state => ({
                ativo:!state.ativo
            })
        )
    }

    // quando componente é montado
    componentDidMount() {
        console.log(`O componente foi montado!`);
    }

    // quando componente é removido
    componentWillUnmount() {
        console.log(`O componente foi removido!`);
    }

    // quando componente é atualisado
    componentDidUpdate() {
        console.log(`O componente foi atuaçisado!`);
    }

    render() {
        return (
            <>
                <h1>Componente de Classe!</h1>
                <button onClick={this.ca}>click here!</button>
            </>
        )
    }

}