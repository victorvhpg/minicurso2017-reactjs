"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Master from './componentes/master';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import Favoritos from './paginas/favoritos';


var Erro404 = () => (<h2>Página não encontrada</h2>);

 //location.pathname
var path =  window.location.pathname.indexOf("/minicurso2017-reactjs/app/build/") >= 0 ? "/minicurso2017-reactjs/app/build/" : "/"


class Rotas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Master >
                    <Switch>
                        <Route exact path={path} component={Home} />
                        <Route path={path + "sobre"} component={Sobre} />
                        <Route path={path + "favoritos"} component={Favoritos} />
                        <Route component={Erro404} />
                    </Switch>
                </Master>
            </BrowserRouter>
        );
    }
};

export default Rotas;