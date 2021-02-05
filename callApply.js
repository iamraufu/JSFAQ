const person = {
    firstName: 'Rabin',
    lastName: 'Eddie',
    salary: 8500,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    expenses: function(amount) {
        console.log(this);
        this.salary -= amount;
        return this.salary;
    },
    extraIncome: function(amount) {
        this.salary += amount * 30;
        return this.salary;
    }
}

console.log(person.expenses(1500));
console.log(person.extraIncome(150));

const betterPerson = {
    firstName: 'Abdul',
    lastName: 'Salaam',
    salary: 13000
}

const worsePerson = {
    firstName: 'Babul',
    lastName: 'Mia',
    salary: 9500
}

const betterExpenses = person.expenses.bind(betterPerson);
betterExpenses(2000);
console.log(betterPerson.salary)

const worseExtraIncome = person.extraIncome.bind(worsePerson);
worseExtraIncome(80);
console.log(worsePerson.salary)