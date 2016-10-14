var React = require('react');
var Loader = require('react-loader');

var AddComponent = require('../components/AddComponent');
var TodoComponent = require('../components/TodoComponent');

var Layout = React.createClass({
    
    getInitialState : function() {
        return {
            loading: true,
            todos: []
        };
    },

    addTodo: function(value, callback) {
        if (value) {
            var list = this.state.todos;
            list.push(value);
            this.setState({todos: list});
            console.log(this.state);

            // after adding call the callback
            callback(true);
        }
    },

    render : function() {
        var title = "Todo List";
        console.log("layout render");

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1> {title} </h1>
                        </div>
                    </div>
                </div>
                <hr/>
                <Loader loaded={this.state.loading} />
                <AddComponent addTodo={this.addTodo}/>
                <TodoComponent todos={this.state.todos}/>
            </div>
            );
    }
});

module.exports = Layout;