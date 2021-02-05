const person = {
    firstName: 'Rabin',
    lastName: 'Eddie',
    salary: 8500,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    expenses: function(amount) {
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