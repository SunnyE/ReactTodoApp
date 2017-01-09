var moment = require('moment');

console.log(moment().format());



var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1459111648;

var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ H:mm A'));

console.log('current moment', currentMoment.format('MMMM Do, YYYYY @ H:mm a'));


