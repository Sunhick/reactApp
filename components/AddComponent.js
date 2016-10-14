/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";

import {SearchComponent} from "./SearchComponent";

export default class AddComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            value: ""
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    callback(success) {
        if (success) {
            console.log("reset the value");
            this.setState({value: ""});
            return;
        }

        console.log("dont reset the value");
    }

    render() {
        var style = "btn btn-primary";
        if (!this.state.value) {
            style = "btn btn-default";
        }

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <input className="form-control" type="text" value={this.state.value} 
                                onChange={this.handleChange.bind(this)} name="value" placeholder="Enter todo here"/>
                        </div>
                        <div className="col-md-1">
                            <button className={style} name="add" 
                                disabled={!this.state.value}
                                onClick={()=> {this.props.addTodo(this.state.value, this.callback.bind(this))}}> Add Item </button>
                        </div>
                        <div className="col-md-4">
                            <SearchComponent filter={this.props.filter}/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}