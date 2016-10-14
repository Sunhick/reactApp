/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";
import Loader from "react-loader";

import AddComponent from "../components/AddComponent";
import TodoComponent from "../components/TodoComponent";

export default class RootContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            todos: [],
            filtering: false,
            filter: []
        };
    }
    
    addTodo(value, callback) {
        if (value) {
            var list = this.state.todos;
            list.push(value);
            this.setState({todos: list, loading: false});
            console.log(this.state);

            // after adding call the callback
            callback(true);
        }
    }

    filterTodo(e) {
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
    }

    render() {
        var title = "Todo List (ES6)";
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
                <Loader loaded={!this.state.loading} />
                <AddComponent addTodo={this.addTodo.bind(this)} filter={this.filterTodo.bind(this)}/>
                <TodoComponent todos={todos} />
            </div>
            );
    }
}