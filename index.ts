/* 

OBJECT-ORIENTED PROGRAMMING

* (OOP) is a programming model that centers around using classes and objects to organize data. 
* It does that through properties and methods within those classes/objects.
* Classes are like templates for instances, or specific objects created from any given class.
* There are several benefits to using the OOP approach, including easier debugging, reuse of code, flexibility, and breaking your code down into more manageable chunks.
* These principles are summarized in the four pillars of OOP.



FOUR PILLARS OF OOP

* ENCAPSULATION: Storing methods together with their associated data (properties) in objects/classes. Bundling code together into useful pieces.

* ABSTRACTION: Only making public/outwardly useable the pieces of code that are relevant for use elsewhere; anything else is kept for internal use only.
    - Delineating between what internal and external interfaces.

* INHERITANCE: Sharing properties/methods when one class is extended from another. The one being extended from is called the prototype, and the relationship between all of them is called the prototype chain. Reduces repetitive code if classes or objects would share structure or information.
    
* POLYMORPHISM: The ability for classes and objects to take on several forms and be flexible. Cuts down on need to duplicate code because if you write flexible code, you can reuse/share parts of it.

*/



// ENCAPSULATION
// Storing methods together with their associated data (properties) in objects/classes

    class BankAccount1 {
        owner: string
        type: string
        balance: number

        constructor(owner: string, type: string, balance: number){
            this.owner = owner,
            this.type = type,
            this.balance = balance
        }

        getAccountBalance(){
            console.log(`The balance of your ${this.type} account is ${this.balance}.`)
        }

        depositMoney(amount: number) {
            return this.balance + amount;
        }
    }



/* ABSTRACTION
* Control what is internal/external interface. 
* COMPLEX OR UNNECESSARY DETAILS ARE HIDDEN
* Hide details and show essentials
* Smaller and more manageable pieces of code
*/
    class BankAccount2 {
        owner: string
        type: string
        // pieces of data you wouldn't want other people to be able to access or change --> use access/data modifers and underscore convention
        private _accountNumber: number
        private _balance: number 

        constructor(owner: string, type: string, accountNumber: number, balance: number){
            this.owner = owner,
            this.type = type,
            this._accountNumber = accountNumber,
            this._balance = balance
        }

        getAccountBalance(){
            console.log(`The balance of your ${this.type} account is ${this._balance}.`)
        }

        depositMoney(amount: number) {
            return this._balance + amount;
        }

    }



/* INHERITANCE: Instances can inherit from a parent class when they "extend" it,
and POLYMORPHISM: Objects can take various behaviour depending on the context --> Flexibility/reusability of code.
*/

    // parent class / prototype
    class Animal {
        species: string
        breed: string
        age: number

        constructor(species: string, breed: string, age: number) {
            this.species = species,
            this.breed = breed,
            this.age = age
        }

        makeSound(sound: string) {
            console.log(sound)
        }

        eatFood(food: string) {
            console.log('done eating ' + food)
        }
    }

    // Dog is an instance of the Animal class, its prototype
    class Dog extends Animal { // specifies which parent class its extending or INHERITING properties/methods from

        playsFetch: boolean

        constructor(species: string, breed: string, age: number, playsFetch: boolean){ // pass in the properties and their types
            super(species, breed, age) // INHERITANCE: call the parent constructor it wants to inherit from
            this.playsFetch = playsFetch
        }

        bark () {
            super.makeSound('bark') // POLYMORPHISM: using a unique method (bark) to pass in its own sound to parent method (makeSound)
        }

        eat() {
            this.eatFood('kibble')
        }
    }

    // Cat is an instance of the Animal class, its prototype
    class Cat extends Animal { // specifies which parent class its extending or INHERITING properties/methods from

        likesHairTies: boolean

        constructor(species: string, breed: string, age: number, likesHairTies: boolean){ // pass in the properties and their types
            super(species, breed, age) // INHERITANCE: call the parent constructor it wants to inherit from
            this.likesHairTies = likesHairTies
        }

        meow () {
            super.makeSound('meow') // POLYMORPHISM: using a unique method (bark) to pass in its own sound to parent method (makeSound)
        }

        eat() {
            this.eatFood('tuna')
        }
    }