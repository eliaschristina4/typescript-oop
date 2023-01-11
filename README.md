# TypeScript & Object-Oriented Programming 

## TypeScript

TypeScript is a programming language built on JavaScript, or a superset of JS. It adds the use of types, and is an object-oriented language that compiles to regular JavaScript code. The use of type safety in TypeScript helps developers write clearer code and alerts you to potential errors as you write the code. It also introduces other features like interfaces and tuples.

## Object-Oriented Programming

Object-oriented programming (OOP) is a programming model that centers around using objects and classes to organize data. It does that through properties and methods, which refer to the variables and functions nested within those objects and classes. 

Classes are like templates for instances, or specific objects created from any given class. For example, you could have a Professor class, and each object created from it would be instances of that class; for example, objects containing information on Prof. John Smith of Sociology and Prof. Jane Doe from Anthropology would be instances of the Professor class. 

There are several benefits to using the OOP approach, including easier debugging, reuse of code, flexibility, and breaking your code down into more manageable chunks – these principles are referred to as the four pillars of OOP.

### Pillars of OOP

- **Encapsulation**: Storing methods together with their associated data (properties) in objects/classes.
    - Think of the word capsule; you're creating little capsules of data and/or functionality.
- **Abstraction**: Only making public/outwardly useable the pieces of code that are relevant for use elsewhere; anything else is kept for internal use only.
    - Delineating between what internal and external interfaces.
    - Complex or unnecessary details are hidden; hide details and show essentials.
    - Smaller and more manageable pieces of code.
- **Inheritance**: Sharing properties/methods when one class extends another. The one being extended from (ex: Person -> Student, Person -> Professor) is called the prototype, and the relationship between all of them is called the prototype chain. 
    - Reduces repetitive code if classes or objects would share structure or information. 
    - Forms relationships and hierarchies in your code.
- **Polymorphism**: The ability for classes and objects to take on several forms and be flexible. Like above, a Person class can be extended and used for different subclasses of people, like professors, students, or even athletes. 
    - Cuts down on need to duplicate code because if you write flexible code, you can reuse/share parts of it.

## TypeScript data modifiers (AKA access modifiers): 

Access modifiers, or data modifiers, allow us to specify where properties and methods are visible and editable in our code. A good way to understand these is by looking at them as belonging to different tiers that get more strict as you go. Below is a list and brief explanation of the modifiers used in TypeScript:

- **Public**: This is the default, but can also be used explicitly. This makes properties/methods accessible from anywhere.
- **Static**: When you use the static keyword, it means the property/method belongs to the class itself, not instances of the class. Therefore, you can't access them from the instance, only by directly referencing the class itself.
- **Protected**: Protected properties/methods are accessible from inside the class and those extending it.
- **Private**: Properties/methods marked "private" are accesible only from inside the class.
- **Readonly**: This keyword is added to properties/methods to limit its alteration to the constructor.

## Author: 
- Christina Elias - [GitHub](https://github.com/eliaschristina4)