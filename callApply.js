const person = {
    firstName: 'Rabin',
    lastName: 'Eddie',
    salary: 8500,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    expenses: function(amount) {
        // console.log(this);
        this.salary -= amount;
        return this.salary;
    },
    extraIncome: function(amount) {
        this.salary += amount * 30;
        return this.salary;
    },
    tax: function(amount) {
        this.salary = this.salary - amount
        return this.salary
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
console.log('Better Person Salary:', betterPerson.salary);

const worseExtraIncome = person.extraIncome.bind(worsePerson);
worseExtraIncome(80);
console.log('Worse Person Salary:', worsePerson.salary);

person.expenses.call(betterPerson, 200);
console.log('Better Person Extra Income:', person.expenses(100))

person.tax.call(worsePerson)
console.log("Worse Person: ", person.tax(400))

person.tax.apply(betterPerson, [400, 40, 50])