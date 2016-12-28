var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo'); 
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid')

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean your room',
                    completed: true
                },
                {
                    id: uuid(),
                    text: "Work out for the GAINS !!",
                    completed: true
                },
                {
                    id: uuid(),
                    text: "Beat Mario Kart ",
                    completed: false
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    handleToggle: function (id) {
        alert(id);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp; 