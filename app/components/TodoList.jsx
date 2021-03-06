var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">No active todos</p>
                );
            }
            return todos.map((todo) => {
                return (
                    // spread operator separates all the props 
                    <Todo key={todo.id} {...todo} />
                )
            });
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList); 