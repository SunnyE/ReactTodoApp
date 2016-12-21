var React = require('react');
var TodoList = require('TodoList');

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
                },
                {
                    id: 3,
                    text: "Work out for the GAINS !!"
                },
                {
                    id: 4,
                    text: "Beat Mario Kart "
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp; 