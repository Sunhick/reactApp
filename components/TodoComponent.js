/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";

import EntryComponent from "./EntryComponent";

export default class TodoComponent extends React.Component {
    render() {
        const todos = this.props.todos.map((title, i)=> 
            <div key={i}>
                <EntryComponent title={title} />
                <br/>
            </div>);

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                                {todos}
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}