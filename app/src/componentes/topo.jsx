"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MenuDireita from "./menu-direita";

class Topo extends Component {
    render() {
 var iconeLeft = (
            <div
                onTouchTap={this.onVoltar}
                aria-expanded="false"
                role="button"
                tabIndex={0}
                className="mdl-layout__drawer-button btn-left-top">
                <i className="material-icons">menu</i>
            </div>
        );



        return (


            <header className="mdl-layout__header ">
                {iconeLeft}
                <div className="mdl-layout__header-row">
                    {/* this.props.title */}
                    <span className="mdl-layout-title">
                         App GIFs React.js
                    </span>
                    <div className="mdl-layout-spacer">
                    </div>
   
                    <button className="mdl-button mdl-js-button mdl-button--icon">
                         <i className="material-icons">search</i>
                    </button>
                     <MenuDireita />
                </div>
              
            </header>





         
        );
    }
};

export default Topo;