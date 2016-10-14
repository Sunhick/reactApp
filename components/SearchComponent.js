/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
var React = require('react');

var SearchComponent = React.createClass({
    render: function() {
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
});

module.exports = SearchComponent;