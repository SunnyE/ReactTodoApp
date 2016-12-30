var React = require('react');
var ReactDOM = require('React-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist(); 
    });

    it('should call onToggle prop with id on click', () => {
        var todoDate = {
            id: 201,
            text: 'this is a test for test sale',
            completed: true
        };

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(201);

        
    })
});