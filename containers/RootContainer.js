var React = require('react');
var Loader = require('react-loader');

var AddComponent = require('../components/AddComponent');
var TodoComponent = require('../components/TodoComponent');

var Layout = React.createClass({
    getInitState : function() {
        return {
            loading: true
        };
    },

    render : function() {
        var title = "Todo list";

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1> {title} </h1>
                        </div>
                    </div>
                </div>

                <AddComponent />
                <TodoComponent />
            </div>
            );
    }
});

module.exports = Layout;