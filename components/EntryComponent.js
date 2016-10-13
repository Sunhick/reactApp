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