var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function (e){

    },
    render: function() {
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                </form>
            </div>
        );
    }
});

module.exports = AddTodo; 