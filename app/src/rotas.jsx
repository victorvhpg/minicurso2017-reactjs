"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Master from './componentes/master';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import Favoritos from './paginas/favoritos';


var Erro404 = () => (<h2>Página não encontrada</h2>);

 //location.pathname
class Rotas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Master >
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/sobre" component={Sobre} />
                        <Route path="/favoritos" component={Favoritos} />
                        <Route component={Erro404} />
                    </Switch>
                </Master>
            </BrowserRouter>
        );
    }
};

export default Rotas;