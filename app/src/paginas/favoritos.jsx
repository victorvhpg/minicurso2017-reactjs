"use strict";
import React, { Component } from 'react';
import apiGif from "../modulos/api-gif";
import ListaVideo from "../componentes/lista-gifs";



class Favoritos extends Component {

    constructor(props) {
        super(...props);
        this.state = this.getValoresIniciais();
    }

    getValoresIniciais() {
        return {
            list: apiGif.getListFavorito()
        };
    }

    render() {
        console.log("render: Favoritos");
        return (
            <div>
                <h4 style={{ textAlign: "center" }}>Favoritos</h4>
                <ListaVideo list={this.state.list} />
                {this.state.list.length === 0 ?
                    <h5>
                        nenhum registro
                    </h5>
                    : null}
            </div>
        );
    }
}


export default Favoritos;
