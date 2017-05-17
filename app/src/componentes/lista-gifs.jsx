"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemVideo from "./item-gif";

class ListaVideo extends Component{
    

    render  () {

        return (
            <div className="lista-gif">
                {this.props.list.map(function (item,indice) {
                    return (
                        <ItemVideo
                            key={indice}
                            item={item}
                        />
                    );
                })}
            </div>
        );
    }
};


ListaVideo.propTypes = {
    list: PropTypes.any
};

export default ListaVideo;
