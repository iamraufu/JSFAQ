function addNumbers(num1, num2) {
    // console.log(arguments);
    var sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const num = arguments[index];
        sum += num;
    }
    return sum;
}
var result = addNumbers(5, 3, 15);
console.log(result);