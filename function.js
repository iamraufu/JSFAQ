function evenOddCheck(num) {
    if (num % 2 == 0)
        console.log(num, ': is even number')
    else {
        console.log(num * 2, ': is odd number')
    }
}

numbers = [5, 12, 23, 11, 29, 40]
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    evenOddCheck(element);
}
console.log("------------------")
age = [13, 17, 15, 19, 21, 23];
for (let index = 0; index < age.length; index++) {
    const element = age[index];
    evenOddCheck(element);
}