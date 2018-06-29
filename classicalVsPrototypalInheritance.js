// classical inheritance

// first example of classical inheritance

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	printName() {
		console.log(this.name);
	}
}

let person = new Person('Sushil', 27);

Person.prototype.setNewName = function(name) { this.name = name; console.log('Set new name as:', this.name)};


// second example of classical inheritance

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	printName() {
		console.log(this.name);
	}
}

class Employer extends Person {
	constructor(name, age,companyName) {
		super(name, age);
		this.companyName = companyName;
	}

	printCompanyWithPerson() {
		console.log(this.name, this.companyName, this.age);
	}
}