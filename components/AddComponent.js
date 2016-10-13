var React = require('react');

var AddComponent = React.createClass({
    render: function() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="value" placeholder="Enter todo"/>
                        </div>
                        <button className="btn btn-primary" name="add"> Add </button>
                    </div>
                </div>
            </div>
            );
    }
});

module.exports = AddComponent;