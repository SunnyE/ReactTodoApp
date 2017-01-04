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
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
        
        expect(actualTodos).toEqual([]); 
        });

        it('should return todos if valid array in local storage', () => {
            var todos = [{
                id: 23,
                text: 'test api calls',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

        expect(actualTodos).toEqual(todos); 
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text:"sample text",
            completed: true
        },
        {
            id: 2,
            text:"sample text 45235232",
            completed: false
        },
        {
            id: 3,
            text:"sample text",
            completed: true
        }];
        it('should return all if show completed is true', ()=> {
        var filteredTodos = TodoAPI.fitler(todos, true, '');

        expect(filteredTodos.length).toBe(3);
        });

        it('should return 1 if show completed is false', ()=> {
        var filteredTodos = TodoAPI.fitler(todos, false, '');

        expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => { 
            var filteredTodos = TodoAPI.filterTodos(todos,true, '');

            expect(filteredTodos[0].completed).toBe(false);
        })
    });
});