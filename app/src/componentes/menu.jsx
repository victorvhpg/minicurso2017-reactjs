"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


class Menu extends Component{
   
    esconderMenu(){
        var d = document.querySelector(".mdl-master-div");
        d.MaterialLayout.toggleDrawer();
    }

    render() {

        return (
            <div className="mdl-layout__drawer">
                <div className="mdl-layout-title mdl-color--indigo-500 mdl-color-text--white">
                    App GIFs React.js

                </div>
                <nav className="mdl-list list-menu">
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to={window.location.pathname}>
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">home</i>
                            Início
                        </span>
                    </Link>

                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to={window.location.pathname + "favoritos" }>
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">favorite</i>
                            Favoritos
                        </span>
                    </Link>
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to="/aliens">
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">bug_report</i>
                            Aliens
                        </span>
                    </Link>
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to={window.location.pathname + "/sobre"}>
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">info</i>
                            Sobre
                        </span>
                    </Link>
                </nav>
            </div>
        );
    }
}


export default Menu;
