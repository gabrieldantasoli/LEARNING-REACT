import React from "react";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        const {nome , email , senha} = this.state;
        alert(`Nome = ${nome} \n Email = ${email} \n Senha = ${senha}`);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h2>Se cadastre aqui!</h2>

                <form onSubmit={this.cadastrar}>
                    <label>Nome : </label>
                    <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome : e.target.value})} /> <br />

                    <label>Email : </label>
                    <input type="email" value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} /> <br />

                    <label>Senha : </label>
                    <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha : e.target.value})} /> <br />

                    <button type="submit">Cadastrae agora</button>
                </form>
            </div>
        );
    }
}