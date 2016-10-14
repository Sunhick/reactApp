/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
var React = require('react');
var Loader = require('react-loader');

var AddComponent = require('../components/AddComponent');
var TodoComponent = require('../components/TodoComponent');

var Layout = React.createClass({
    
    getInitialState : function() {
        return {
            loading: true,
            todos: [],
            filtering: false,
            filter: []
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

    filterTodo: function(e) {
        var filter = e.target.value.toLowerCase();

        if (filter) {
            this.state.filter = this.state.todos;

            var filtered = [];
            $.each(this.state.todos, function(index, todo) {
                console.log(index, todo);
                if (todo.toLowerCase().indexOf(filter) !== -1) {
                    filtered.push(todo);
                }
            });

            this.setState({filter: filtered, filtering: true});
            console.log("set state");
            return;
        }

        this.setState({filtering: false});
    },

    render : function() {
        var title = "Todo List";
        console.log("layout render");

        var todos = this.state.filtering? this.state.filter : this.state.todos;

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
                <AddComponent addTodo={this.addTodo} filter={this.filterTodo}/>
                <TodoComponent todos={todos} />
            </div>
            );
    }
});

module.exports = Layout;