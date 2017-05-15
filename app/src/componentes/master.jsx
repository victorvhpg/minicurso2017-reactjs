"use strict";

import React, { Component } from 'react';
import Topo from "./topo";
import Menu from "./menu";

class Master extends Component{
   
    componentDidMount () {
        window.componentHandler.upgradeAllRegistered(); //ativa  o mdl
    } 

    navegar () {
       
    } 

    render () {
        console.log("render: master");
        return (
            <div className="mdl-master-div mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Topo/>
                <Menu/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
                {/*   fazer  rodape... */}
            </div>
        );
    }
};

export default Master;
