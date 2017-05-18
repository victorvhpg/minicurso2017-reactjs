"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
import MenuDireita from "./menu-direita";
//location.pathname
var path = window.location.pathname.indexOf("/minicurso2017-reactjs/app/build/") >= 0 ? "/minicurso2017-reactjs/app/build/" : "/"

class Topo extends Component {



    onPesquisar() {

        this.props.history.push(path+ "pesquisar");

    }






    render() {
        var iconeLeft = (
            <div
                className="mdl-layout__drawer-button btn-left-top">
                <i className="material-icons">menu</i>
            </div>
        );



        return (


            <header className="mdl-layout__header ">
                {iconeLeft}
                <div className="mdl-layout__header-row">

                    <span className="mdl-layout-title">
                        App GIFs React.js
                    </span>
                    <div className="mdl-layout-spacer">
                    </div>

                    <button onClick={this.onPesquisar.bind(this)} className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">search</i>
                    </button>
                    <MenuDireita />
                </div>

            </header>






        );
    }
};

export default withRouter(Topo);