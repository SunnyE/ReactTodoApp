var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions'); 

var Todo = React.createClass({
    render: function () {
        var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        
        //using ternary operator to selectively set class names of the todo items. if its completed it will get a completed class if not it will just get a normal todo class name. 
        var todoClassName = completed ? 'todo todo-completed' : 'todo'; 
        var renderDate = () => {
            var message = 'Created ';
            var TimeStamp = createdAt;

            if(completed) {
                message = 'completed ';
                TimeStamp = completedAt;
            }
            return message + moment.unix(TimeStamp).format('MMM Do YYYY @ h:mm a' );
        };
        return (
            <div className={todoClassName} onclick={() => {
                // this.props.onToggle(id); 
                dispatch(actions.toggleTodo(id)); 
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p> {text} </p> 
                    <p className="todo_subtext"> {renderDate()}</p> 
                </div>
            </div>
        )
    }
});

module.exports = connect(

)(Todo); 