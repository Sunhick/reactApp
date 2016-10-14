/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";

// Note:
// If class is exported as "export default class SomeComponent" then you i can import as "import SomeComponent from ..."
// If it's exported with no defualt "export class SomeComponent" then, "import {SomeComponent} from ..."

export class SearchComponent extends React.Component{
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <input name="search" className="form-control" onChange={this.props.filter} placeholder="Search" />
                </div>

                <div className="col-md-6">
                    <button className="btn btn-info"> Search </button>
                </div>
            </div>
            );
    }
}