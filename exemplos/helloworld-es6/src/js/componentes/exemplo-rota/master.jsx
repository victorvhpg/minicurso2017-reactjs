import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class Master extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    navegar = () => {
        this.props.history.push("/usuarios");
    };

    render() {
        console.log("render: master");
        return (
            <div>
                <header>
                    <h2>TOPO</h2>
                    <nav>
                        <Link to="/">Home</Link> -
                    <Link to="/sobre">Sobre</Link> -
                    <Link to="/usuarios">Usuários</Link> -
                    <Link to="/aliens">Aliens</Link>
                        <button onClick={this.navegar}>teste </button>
                    </nav>
                </header>
                <div>
                    {this.props.children}
                </div>
                <footer>RODAPE</footer>
            </div>
        );
    }
};


export default withRouter(Master);