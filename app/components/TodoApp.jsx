var React = require('react');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean your room'
                }
            ]
        };
    },
    render: function () {
        return (
            <div>
                
            </div>
        )
    }
});

module.exports = TodoApp; 