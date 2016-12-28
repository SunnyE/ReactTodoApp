// function add (a,b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];
// // ... spread operator spreads out the items in an array so they can be used as arguements in a function
// console.log(add(...toAdd)); 

var groupA = ['jen', 'cory'];

var groupB = ['Vikram'];
// in this example the ... spreads the elements of the nested array into the final array so the final array has the items of groupA as elements in the array and not just the entire array as an item in the array. 

// var final = [...groupA, ...groupB];

var person = ['Andrew', 25];

var personTwo = ['Ethan', 25];

var names = ['mike', 'ben '];

var final = ['andrew', ...names]; 

function greet (name, age) {
    console.log('hello ' + name + ' , your are ' + age );
}

greet(...person);

greet(...personTwo); 

final.forEach(function (name){
    console.log('hi ' + name); 
})