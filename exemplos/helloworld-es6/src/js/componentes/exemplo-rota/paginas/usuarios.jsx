import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Usuarios extends Component {

    render() {
        console.log("render: Usuarios");
        return (
            <div>

                <h3>Usuarios ....</h3>
                <ul>
                    <li> <Link to="/usuarios/ver/1">1</Link>   </li>
                    <li> <Link to="/usuarios/ver/2">2</Link>  </li>
                    <li> <Link to="/usuarios/ver/3">3</Link>  </li>
                </ul>
                <hr />
                {this.props.children}

            </div>
        );
    }
}


 export default Usuarios;