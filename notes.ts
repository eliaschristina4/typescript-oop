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

// Type Assertion - explicitly telling the compiler we want to treat an entity as a different type
let cid: any = 1;
// let customerID = <number>cid;
let customerid = cid as number

// Functions
function addNum(x: number, y: number): number { // x, y, and the returned value must all be numbers
    return x + y
};

// Void 
function log(message: string | number): void {
    console.log(message);
};

// Interfaces
interface UserInterface {
    readonly id: number // self-explanatory lol
    name: string
    age?: number // ? = optional property
}

const user1: UserInterface = {
    id: 1,
    name: 'Marie'
}

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes 
class Person {
    id: number
    name: string

    constructor(id: number, name: string) { // runs whenever object instantiated from class
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const brad = new Person(1, 'brad');
const mike = new Person(2, 'mike');

// Access/Data modifiers
// public by default or when declared, self-explanatory; most of the time redundant to declare
// private = only access from within the class
// protected = you can only access within the OG class or any class that extends it

// Interfaces and classes together
interface PeopleInterface {
    id: number 
    name: string
    register(): string
}

class People implements PeopleInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

// Extending a class // SUB-CLASSES

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name) // grabs those from OG class 
        this.position = position
    }
}

const emp = new Employee(3, 'bob', 'developer');

// Generics 

function getArray<T>(items: T[]): T[] { // <T> & T[] are type placeholder
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['brad', 'john', 'jose'])

