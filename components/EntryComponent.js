/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
var React = require('react');

var EntryComponent = React.createClass({
    render: function() {
        return (
            <label>
                <input type="checkbox" /> {this.props.title}
            </label>
            );
    }
});

module.exports = EntryComponent;