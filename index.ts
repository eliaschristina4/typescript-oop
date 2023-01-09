// NOTES

// TERMINAL COMMANDS
// tsc = compiles any typescript in the project
// tsc index = compiles a specific ts file in the project
// tsc -- watch (index) = like nodemon for monitoring errors, index optional if you wanna specify one file
// TSC --INIT = makes a tsc config file

let company: string = 'Road to Hire'
let isPublished: boolean = true;
let id: number = 5;
// let id = '5'; // doesn't like this = ERROR
// ^ explicitly setting variable type of ts is also capable of type inferences

let x: any = 'string';
x = true; // ok bc 'any' data type

let ids: number[] = [1,2,3,4,5]; // must be array of nums
// ids.push('hello'); // nope doesn't like

let arr: any[] = [1, true, 'hiya'];

// Tuple -- specify the exact types inside the array
let person: [number, string, boolean] = [1, 'Brad', false]; // must be in same order as tuple

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Jessica'],
    [3, 'Manuel'],
];

// Union 
let productid: string | number = 22;

productid = '22' // also ok

// Enums (Enumerated types)
enum Direction1 { // constants with default values of 0,1,2,3...etc but you can change that to other nums or strings
    Up,
    Down, 
    Left, 
    Right
}

// Objects - two ways

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}