var React = require('react');

var EntryComponent = require('./EntryComponent');

var TodoComponent = React.createClass({
    render: function() {
        const todos = [
            "Buy Milk",
            "Do assignment",
            "Do laundry"
        ].map((title, i)=> 
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
});

module.exports = TodoComponent;