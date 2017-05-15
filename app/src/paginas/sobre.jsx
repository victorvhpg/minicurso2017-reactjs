"use strict";

import React, { Component } from 'react';
 

class Sobre extends Component{

    render() {
        console.log("render: Sobre");
        return (
            <div style={{ textAlign: "center" }} >

                <h4 >Sobre</h4>

                <h4>
                    INFOESTE 2017
                </h4>

                <h4>
                    Aplicações JavaScript de alta performance com React.js <br />
                    @victorvhpg
                </h4>
            </div>
        );
    }
};


export default Sobre;
