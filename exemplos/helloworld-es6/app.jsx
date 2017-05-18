"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './componentes/hello-world';
import ExemploForm from './componentes/exemplo-form';
import Rotas from './componentes/exemplo-rota/rotas';



class App extends Component {
    // componentDidMount: function () {
    //   setInterval(function(){
    //     this.refs.teste.aumentarContador();
    //   }.bind(this), 1000);
    // },

    render() {
        return (
            <div>
                app de Exemplo
               <HelloWorld ref="teste" idade={3} mensagem="oi" />
                <hr />
                <ExemploForm />

            </div>
        );
    }
};


ReactDOM.render(<Rotas />, document.getElementById("app"));




module.hot.accept();
