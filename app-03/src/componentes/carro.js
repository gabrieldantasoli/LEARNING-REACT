import React from "react";

export default class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.ano =2018
        this.capacity = 5
        this.state = {
            ligado: false,
            vel: 0,
        }
    }

    change() {
        if (this.state.vel == 0) {
            this.state.ligado ? this.setState({ligado: false}) : this.setState({ligado: true});
        } else {
            alert("Carro está em movimento");
        }
    }

    acelerar() {
        if (this.state.ligado) {
            if (this.state.vel < 200) {
                //this.setState({vel: this.state.vel+10})
                this.setState(
                    (state,props) => (
                        {vel: state.vel + props.fator}
                    )
                )
            }
        } else {
            alert("Carro desligado!")
        }
    }

    freiar() {
        if (this.state.vel > 0) {
            this.setState({vel: this.state.vel-10})
        }
    }


    render() {
        return(
            <>
                <h1>My car</h1>
                <p>Modelo = {this.props.car}</p>
                <p>Cor = {this.props.cor}</p>
                <p>Ano = {this.ano}</p>
                <p>Capacity = {this.capacity}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Velocidade Atual = {this.state.vel}</p>
                <button onClick={() => this.change()}>{this.state.ligado ? "Desligar" : "Ligar"}</button>
                <button onClick={() => this.acelerar()}>acelerar</button>
                <button onClick={() => this.freiar()}>freiar</button>
            </>
        ) 
    }
}