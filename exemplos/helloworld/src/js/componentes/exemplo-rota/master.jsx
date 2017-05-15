var React = require("react");
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link
var withRouter = require('react-router-dom').withRouter;
var createClass = require("create-react-class");

var Master = createClass({
   propTypes: {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  },

   navegar: function(){

    this.props.history.push("/usuarios");


   },

    render: function(){
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

});


module.exports = withRouter(Master);