var React = require('react');
var ReactDOM = require('React-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo'); 

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist(); 
    });
    it('should render a todo component for every todo item', () => {
        var todos = [
            {
                id:1,
                text: 'Read stock book'
            },
            {
                id:2,
                text: 'get those things done'
            }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length)
    });
    it('should render empty message if there are not any todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});