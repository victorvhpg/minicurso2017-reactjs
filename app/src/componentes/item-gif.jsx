"use strict";
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import apiGif from "../modulos/api-gif";

class ItemVideo extends Component {
    constructor(props) {
        super(...props);
        this.state = {                 
            isFavorito: false
        };
    }
   
    componentDidMount() {
        this.setState({
            isFavorito: apiGif.isFavorito(this.props.item.id)
        });      
    }

    onFavorito() {
        //remover
        if (this.state.isFavorito) {
            apiGif.removeFavorito(this.props.item.id).then(function () {
                this.setState({
                    isFavorito: false
                });
            }.bind(this)).catch(function () {
                alert("Erro ao remover favorito");
            });
            return;
        }
        //add
        apiGif.addFavorito(this.props.item).then(function () {
            this.setState({
                isFavorito: true
            });
        }.bind(this)).catch(function () {
            alert("Erro  favorito");
        });
    }

    render() {
        return (
            <div className="item-gif mdl-card mdl-shadow--2dp">
                <div style={{
                    position: "relative",
                    backgroundColor: "#000"
                }}>
                    <img                                      
                        src={"http://i.giphy.com/"+this.props.item.id+".gif"}>
                    </img>
 
                </div>
                <div className="mdl-card__supporting-text">
                    {this.props.item.user && this.props.item.user.username}
                </div>

                <div className="mdl-card__actions mdl-card--border">
                    <button
                        onClick={this.onFavorito.bind(this)}
                        style={{

                        }}
                        className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i
                            className="material-icons"
                            style={{ color: this.state.isFavorito ? "red" : "#ccc" }}>favorite</i>
                    </button>
                </div>

            </div>
        );

    }
};


ItemVideo.propTypes = {
    item: PropTypes.any
};


export default ItemVideo;
