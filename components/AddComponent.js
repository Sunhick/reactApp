var React = require('react');

var AddComponent = React.createClass({
    getInitialState: function() {
        return {
            value: ""
        };
    },

    handleChange: function(e) {
        this.setState({
            value: e.target.value
        });
    },

    callback: function(success) {
        if (success) {
            console.log("reset the value");
            this.setState({value: ""});
            return;
        }

        console.log("dont reset the value");
    },

    render: function() {
        var style = "btn btn-primary";
        if (!this.state.value) {
            style = "btn btn-default";
        }

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} name="value" placeholder="Enter todo"/>
                        </div>
                        <button className={style} name="add" 
                            disabled={!this.state.value}
                            onClick={()=> {this.props.addTodo(this.state.value, this.callback)}}> Add Item </button>
                    </div>
                </div>
            </div>
            );
    }
});

module.exports = AddComponent;