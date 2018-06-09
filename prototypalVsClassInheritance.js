// 1. Class inheritance

class Employer {
  constructor(name, year) {
    this.employerName = name;
    this.yearEstablished = year;
  }
}

const employer = new Employer('Flipcart', 1999);

console.log(employer);

Employer.prototype.getName = function() { return this.employerName; }
console.log(employer.getName());

/**
 * 
3
Before jumping into inheritance, we will take a look at two primary models to create instances (objects) in javascript:

Classical model: Object is created from a blueprint (class)

class Person {
  fn() {...}
} // or constructor function say, function Person() {}

// create instance
let person = new Person();



Prototypal model: Object is created directly from another object.

// base object
let Person = { fn(){...} }

// instance
let person = Object.create(Person);
In either case, Inheritance* is achieved by linking objects using prototype object.

(*base class methods are accessible via. derived class through the prototype object and not required to be explicitly present in derived class.)
 */
