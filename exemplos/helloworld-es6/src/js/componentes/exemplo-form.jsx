import React, { Component } from 'react';

class ExemploForm extends Component {

    constructor(props) {
        console.log("constructor", props);
        super(...props);
        this.state = {
            gravou: false,
            pFilho: false,
            sexo: "M",
            nome: "",
            endereco: ""
        };
    }

    atualizaState(stringId, e) {
        var obj = {};
        obj[stringId] = e.target.value;
        console.log(obj[stringId]);
        this.setState(obj);
    }

    onSalvar = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            gravou: true
        });
        return false;
    }

    render() {

        var msgSucesso = null;
        if (this.state.gravou) {
            msgSucesso = (<h3> Sucesso!</h3>);
        }

        return (
            <div>
                <form onSubmit={this.onSalvar}>
                    <div>
                        <label>Nome</label>
                        <br />
                        <input
                            required="required"
                            value={this.state.nome}
                            onChange={this.atualizaState.bind(this, "nome")} />
                    </div>
                    <div>
                        <label>
                            Possui Filhos
                        </label>
                        <br />
                        <input
                            type="radio"
                            value="S"
                            name="pFilho"
                            onChange={this.atualizaState.bind(this, "pFilho")}
                            checked={this.state.pFilho === "S"} />
                        Sim

                        <input
                            type="radio"
                            value="N"
                            name="pFilho"
                            onChange={this.atualizaState.bind(this, "pFilho")}
                            checked={this.state.pFilho === "N"} />
                        Não
                    </div>
                    <div>
                        <label>Sexo</label>
                        <br />
                        <select
                            required="required"
                            value={this.state.sexo}
                            onChange={this.atualizaState.bind(this, "sexo")}>
                            <option value="M">
                                Masculino
                            </option>
                            <option value="F">
                                Feminino
                            </option>
                        </select>
                    </div>

                    <div>
                        <label>Endereço</label>
                        <br />
                        <input
                            required="required"
                            maxLength="100"
                            value={this.state.endereco}
                            onChange={this.atualizaState.bind(this, "endereco")} />
                    </div>

                    <div>
                        <button type="submit">
                            Salvar
                        </button>
                    </div>
                    {msgSucesso}
                </form>
            </div>
        );
    }
}

export default ExemploForm;
