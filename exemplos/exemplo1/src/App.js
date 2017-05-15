import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MsgEstilo from './componentes/msg-estilo';

class App extends Component {

    onMostrarMsg() {
        console.log("onMostrarMsg");
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <MsgEstilo
                    msg="Olá mundo"
                    onMostrarMsg={this.onMostrarMsg}
                />
            </div>
        );
    }
}

export default App;
