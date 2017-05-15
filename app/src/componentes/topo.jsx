"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MenuDireita from "./menu-direita";

class Topo extends Component {
    render() {
        return (
            <header
                className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    {/*icone menu*/}
                    <span className="mdl-layout-title">
                        App GIFs React.js
                    </span>
                    <div className="mdl-layout-spacer">
                    </div>
                    <MenuDireita />
                </div>
            </header>
        );
    }
};

export default Topo;