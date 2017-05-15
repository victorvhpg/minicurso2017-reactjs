"use strict";

import React, { Component } from 'react';
import apiGif from "../modulos/api-gif";
import ListaVideo from "../componentes/lista-gifs";

class Home extends Component{

    constructor(){
        super();
        this.state = this.getValoreInicial();
    }

    getValoreInicial() {
        return {
            paginacaoIndice: 0,
            carregandoList: false,
            listGif: []
        };
    }

    componentDidMount() {
        this.carregarListVideo();
    }

    carregarListVideo() {
        if (this.state.carregandoList) {
            return;
        }
        this.setState({carregandoList: true});
        console.log(this.state.paginacaoIndice);
        apiGif.getListGif(this.state.paginacaoIndice).then(function(list) {
            console.log(list);
            this.setState({
                paginacaoIndice: this.state.paginacaoIndice + 1,
                carregandoList: false,
                listGif: this.state.listGif.concat(list)
            });
        }.bind(this)).catch(function(e) {
            console.log(e);
            alert("Erro ao obter videos");
            this.setState({carregandoList: false});
        }.bind(this));
    }

    render() {
        console.log("render: Home");
        return (
            <div>

                <h4 style={{
                        textAlign: "center"
                    }}>
                    Todos os Vídeos
                </h4>

                <ListaVideo list={this.state.listGif}/>

                <div style={{
                        padding: "30px",
                        textAlign: "center"
                    }}>
                    <button
                        style={{
                            width: "50%"
                        }}
                        onClick={this.carregarListVideo.bind(this)}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        {!this.state.carregandoList
                            ? "Carregar Mais"
                            : "Carregando..."}
                        </button>

                    </div>
                </div>
            );
        }

    };

    module.exports = Home;
