var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;
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
            <div onclick={() => {
                this.props.onToggle(id); 
            }}>
                <input type="checkbox" checked={completed}/>
                <p> {text} </p> 
                <p> {renderDate}</p> 
            </div>
        )
    }
});

module.exports = Todo; 