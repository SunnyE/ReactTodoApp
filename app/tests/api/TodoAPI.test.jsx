var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    //cleans the slate so the any local storage arrays are cleaned out before the next test starts
    beforeEach( () =>{
        localStorage.removeItem('todos')
    })
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'test api calls',
                completed: false
            }];
        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));

        expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a:'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        })
    });

    describe(getTodos, () => {

    });
});