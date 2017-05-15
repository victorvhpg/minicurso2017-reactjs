var React = require("react");
var createClass = require("create-react-class");
var PropTypes = require('prop-types');




var HelloWorld = createClass({
    //estado inicial do componente
    getInitialState: function () {
        console.log("getInitialState");
        return {
            contador: 0
        };
    },


    getDefaultProps: function () {
        console.log("getDefaultProps");
        return {
            mensagemOpcional: "sou opcional "
        };
    },


    //valida as props de um componente
    propTypes: {
        mensagemOpcional: PropTypes.string,
        idade: PropTypes.number,
        mensagem: PropTypes.string.isRequired,

        // You can declare that a prop is a specific JS primitive. By default, these
        // are all optional.
        optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,

        // Anything that can be rendered: numbers, strings, elements or an array
        // (or fragment) containing these types.
        optionalNode: PropTypes.node,

        // A React element.
        optionalElement: PropTypes.element,

        // You can also declare that a prop is an instance of a class. This uses
        // JS's instanceof operator.
        optionalMessage: PropTypes.instanceOf(Date),

        // You can ensure that your prop is limited to specific values by treating
        // it as an enum.
        optionalEnum: PropTypes.oneOf(['News', 'Photos']),

        // An object that could be one of many types
        optionalUnion: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),

        // An array of a certain type
        optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

        // An object with property values of a certain type
        optionalObjectOf: PropTypes.objectOf(PropTypes.number),

        // An object taking on a particular shape
        optionalObjectWithShape: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
        }),

        // You can chain any of the above with `isRequired` to make sure a warning
        // is shown if the prop isn't provided.
        requiredFunc: PropTypes.func.isRequired,

        // A value of any data type
        requiredAny: PropTypes.any.isRequired,

        // You can also specify a custom validator. It should return an Error
        // object if the validation fails. Don't `console.warn` or throw, as this
        // won't work inside `oneOfType`.
        customProp: function (props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Validation failed.'
                );
            }
        },

        // You can also supply a custom validator to `arrayOf` and `objectOf`.
        // It should return an Error object if the validation fails. The validator
        // will be called for each key in the array or object. The first two
        // arguments of the validator are the array or object itself, and the
        // current item's key.
        customArrayProp: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
            if (!/matchme/.test(propValue[key])) {
                return new Error(
                    'Invalid prop `' + propFullName + '` supplied to' +
                    ' `' + componentName + '`. Validation failed.'
                );
            }
        })
    },

    componentWillReceiveProps: function () { console.log('componentWillReceiveProps', arguments); },
    shouldComponentUpdate: function (nextProps, nextState) { console.log('shouldComponentUpdate', arguments); return true; },
    componentWillUpdate: function () { console.log('componentWillUpdate', arguments); },
    componentDidUpdate: function () { console.log('componentDidUpdate', arguments); },
    componentWillMount: function () { console.log('componentWillMount', arguments); },
    componentDidMount: function () { console.log('componentDidMount', arguments); },
    componentWillUnmount: function () { console.log('componentWillUnmount', arguments); },

    aumentarContador: function () {
        this.setState({
            contador: this.state.contador + 1
        });
    },

    render: function () {
        console.log("render");
        var nome = "Exemplo...";
        return (
            <div style={{
                padding: "10px",
                backgroundColor: "yellow"
            }}>
                <h2>exemplo</h2>
                <button onClick={this.aumentarContador} > atualizar contador</button>
                <p>
                    Valor do Contador: {this.state.contador}
                </p>
                <div>
                    Valor da mensagem:
                    {this.props.mensagem}
                </div>
                <br />
                {nome}
            </div>
        );
    }
});

module.exports = HelloWorld;
