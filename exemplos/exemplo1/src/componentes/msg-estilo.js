import React from 'react';
import PropTypes from 'prop-types';


class MsgEstilo extends React.Component {



    mostrarAviso() {
        alert(this.props.msg);
        this.props.onMostrarMsg();
    }

    render() {

        var estilo = {
            display: "inline-block",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            backgroundColor: "green"
        };

        return (
            <div style={estilo}>

                <label onClick={this.mostrarAviso.bind(this)}>
                    {this.props.msg}
                </label>

            </div>
        );
    }
}


MsgEstilo.propTypes = {
    msg: PropTypes.string.isRequired,
    onMostrarMsg: PropTypes.func.isRequired
};

export default MsgEstilo;