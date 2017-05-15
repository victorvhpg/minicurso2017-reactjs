var React = require("react");

var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var Switch = require('react-router-dom').Switch;

var createClass = require("create-react-class");
var Master = require("./master");
var Home = require("./paginas/home");
var Sobre = require("./paginas/sobre");
var Usuarios = require("./paginas/usuarios");
var Usuario = require("./paginas/usuario");


var Erro404 = createClass({
    render: function () {
        console.log("render: master");
        return (
            <h2>Página não encontrada</h2>
        );
    }
});


var UsuariosPagina = function () {
    return (
        <Usuarios>
            <Route path="/usuarios/ver/:id" component={Usuario} />
        </Usuarios>

    );

};

var Rotas = createClass({
    render: function () {
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
});


module.exports = Rotas;
