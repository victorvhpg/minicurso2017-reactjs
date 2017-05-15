import React, { Component } from 'react';



import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Topo from './componentes/topo';
import Abas from './componentes/abas';
import Menu from './componentes/menu';




class App extends Component {

    constructor(){
        super();
        this.state = {
            menu: false

        };

    }

    onAbrirMenu(){
        this.setState({
            menu: true

        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Menu open={this.state.menu} />
                    <Topo onAbrirMenu={this.onAbrirMenu.bind(this)} />
                    <Abas />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
