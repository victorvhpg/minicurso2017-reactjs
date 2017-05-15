var React = require("react");
var createClass = require("create-react-class");


var PropTypes = require('prop-types');

var Usuario = createClass({


    render: function(){
        console.log("render: Usuario");
        console.log(this.props)
        return (
            <div>
                <h4>VER Usuário id = {this.props.match.params.id}</h4>
            </div>
        );
    }
});
module.exports = Usuario;