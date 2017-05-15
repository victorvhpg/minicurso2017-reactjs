import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Usuario extends Component {
    render (){
        console.log("render: Usuario");
        console.log(this.props)
        return (
            <div>
                <h4>VER Usuário id = {this.props.match.params.id}</h4>
            </div>
        );
    }
};
export default Usuario;