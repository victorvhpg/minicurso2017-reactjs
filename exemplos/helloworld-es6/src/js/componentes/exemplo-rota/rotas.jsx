import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Master from './master';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import Usuarios from './paginas/usuarios';
import Usuario from './paginas/usuario';


var Erro404 = () => (<h2>Página não encontrada</h2>);


var UsuariosPagina = () => {
   return (
        <Usuarios>
            <Route path="/usuarios/ver/:id" component={Usuario} />
        </Usuarios>
    );
};

class Rotas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Master >
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/sobre" component={Sobre} />
                        <Route path="/usuarios" component={UsuariosPagina} />
                        <Route component={Erro404} />
                    </Switch>
                </Master>
            </BrowserRouter>
        );
    }
};


export default Rotas;
