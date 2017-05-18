"use strict";

import React, { Component } from 'react';
import apiGif from "../modulos/api-gif";
import ListaVideo from "../componentes/lista-gifs";

class Pesquisar extends Component {

    constructor() {
        super();
        this.state = this.getValoreInicial();
    }

    getValoreInicial() {
        return {
            query: "",
            paginacaoIndice: 0,
            carregandoList: false,
            listGif: []
        };
    }

    componentDidMount() {
        //mdl
        window.componentHandler.upgradeElement(this.refs.txtPesq);
    }

    onChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    onPesquisar(limpar, e) {
        if (this.state.carregandoList) {
            return;
        }
        this.setState({ carregandoList: true, listGif: limpar ? [] : this.state.listGif });
        console.log(this.state.paginacaoIndice);
        apiGif.pesquisar(this.state.query, this.state.paginacaoIndice).then(function (list) {
            console.log(list);
            this.setState({
                paginacaoIndice: this.state.paginacaoIndice + 1,
                carregandoList: false,
                listGif: this.state.listGif.concat(list)
            });
        }.bind(this)).catch(function (e) {
            console.log(e);
            alert("Erro ao obter videos");
            this.setState({ carregandoList: false });
        }.bind(this));
    }

    render() {
        console.log("render: Pesquisar");
        return (
            <div>

                <h4 style={{
                    textAlign: "center"
                }}>
                    Pesquisa
                </h4>
                <div ref="txtPesq" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input onChange={this.onChange.bind(this)} className="mdl-textfield__input" type="text" id="txt" />
                    <label className="mdl-textfield__label" htmlFor="txt">pesquisar...</label>
                </div>

                <button
                    style={{
                        marginLeft: "3px"
                    }}
                    onClick={this.onPesquisar.bind(this, true)}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                    Pesquisar
               </button>

                <ListaVideo list={this.state.listGif} />

                <div style={{
                    padding: "30px",
                    textAlign: "center"
                }}>
                    <button
                        style={{
                            width: "50%"
                        }}
                        onClick={this.onPesquisar.bind(this, false)}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        {!this.state.carregandoList
                            ? (this.state.listGif.length === 0 ? "Nenhum registro" : "Carregar Mais")
                            : "Carregando..."}
                    </button>

                </div>
            </div>
        );
    }

};

export default Pesquisar;
