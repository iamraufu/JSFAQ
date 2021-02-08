class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const person = new Person("raufu", "prezens", 0)
const person2 = new Person("eftykhar", "rahman", 0)
console.log(person);
console.log(person2);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Moma', 'Moma', 1)
console.log(oldPerson)