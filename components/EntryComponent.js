/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";

export default class EntryComponent extends React.Component {
    render() {
        return (
            <label>
                <input type="checkbox" /> {this.props.title}
            </label>
            );
    }
}