// console.log('test')
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BankAccount1 = /** @class */ (function () {
    function BankAccount1(owner, type, balance) {
        this.owner = owner,
            this.type = type,
            this.balance = balance;
    }
    BankAccount1.prototype.getAccountBalance = function () {
        console.log("The balance of your ".concat(this.type, " account is ").concat(this.balance, "."));
    };
    BankAccount1.prototype.depositMoney = function (amount) {
        return this.balance + amount;
    };
    return BankAccount1;
}());
/* ABSTRACTION
* Control what is internal/external interface.
* COMPLEX OR UNNECESSARY DETAILS ARE HIDDEN
* Hide details and show essentials
* Smaller and more manageable pieces of code
*/
var BankAccount2 = /** @class */ (function () {
    function BankAccount2(owner, type, accountNumber, balance) {
        this.owner = owner,
            this.type = type,
            this._accountNumber = accountNumber,
            this._balance = balance;
    }
    BankAccount2.prototype._getAccountBalance = function () {
        console.log("The balance of your ".concat(this.type, " account is ").concat(this._balance, "."));
    };
    BankAccount2.prototype.depositMoney = function (amount) {
        return this._balance + amount;
    };
    return BankAccount2;
}());
/* INHERITANCE: Instances can inherit from a parent class when they "extend" it,
and POLYMORPHISM: Objects can take various behaviour depending on the context --> Flexibility/reusability of code.
*/
// parent class / prototype
var Animal = /** @class */ (function () {
    function Animal(species, breed, age) {
        this.species = species,
            this.breed = breed,
            this.age = age;
    }
    Animal.prototype.makeSound = function (sound) {
        console.log(sound);
    };
    Animal.prototype.eatFood = function (food) {
        console.log('done eating ' + food);
    };
    return Animal;
}());
// Dog is an instance of the Animal class, its prototype
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(species, breed, age, playsFetch) {
        var _this = _super.call(this, species, breed, age) // INHERITANCE: call the parent constructor it wants to inherit from
         || this;
        _this.playsFetch = playsFetch;
        return _this;
    }
    Dog.prototype.bark = function () {
        _super.prototype.makeSound.call(this, 'bark'); // POLYMORPHISM: using a unique method (bark) to pass in its own sound to parent method (makeSound)
    };
    Dog.prototype.eat = function () {
        this.eatFood('kibble');
    };
    return Dog;
}(Animal));
// Cat is an instance of the Animal class, its prototype
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(species, breed, age, likesHairTies) {
        var _this = _super.call(this, species, breed, age) // INHERITANCE: call the parent constructor it wants to inherit from
         || this;
        _this.likesHairTies = likesHairTies;
        return _this;
    }
    Cat.prototype.meow = function () {
        _super.prototype.makeSound.call(this, 'meow'); // POLYMORPHISM: using a unique method (bark) to pass in its own sound to parent method (makeSound)
    };
    Cat.prototype.eat = function () {
        this.eatFood('tuna');
    };
    return Cat;
}(Animal));
