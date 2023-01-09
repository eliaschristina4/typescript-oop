// NOTES
// TERMINAL COMMANDS
// tsc = compiles any typescript in the project
// tsc index = compiles a specific ts file in the project
// tsc -- watch (index) = like nodemon for monitoring errors, index optional if you wanna specify one file
// TSC --INIT = makes a tsc config file
var company = 'Road to Hire';
var isPublished = true;
var id = 5;
// let id = '5'; // doesn't like this = ERROR
// ^ explicitly setting variable type of ts is also capable of type inferences
var x = 'string';
x = true; // ok bc 'any' data type
var ids = [1, 2, 3, 4, 5]; // must be array of nums
// ids.push('hello'); // nope doesn't like
var arr = [1, true, 'hiya'];
// Tuple -- specify the exact types inside the array
var person = [1, 'Brad', false]; // must be in same order as tuple
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Jessica'],
    [3, 'Manuel'],
];
// Union 
var productid = 22;
productid = '22'; // also ok
// Enums (Enumerated types)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'John'
};
