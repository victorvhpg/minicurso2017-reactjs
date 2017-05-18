"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemGif from "./item-gif";

class ListaGif extends Component{


    render  () {

        return (
            <div className="lista-gif">
                {this.props.list.map(function (item,indice) {
                    return (
                        <ItemGif
                            key={indice}
                            item={item}
                        />
                    );
                })}
            </div>
        );
    }
};


ListaGif.propTypes = {
    list: PropTypes.any
};

export default ListaGif;
