var React = require('react');
var ReactDOM = require('React-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');

describe('Todo', () => {
    it('should exist', () => {
        expect(TodoList).toExist(); 
    })
});