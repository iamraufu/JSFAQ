numbers = [5, 12, 23, 11, 29, 40];
age = [13, 17, 15, 19, 21, 23];

// allEvenOddCheck(numbers);
// allEvenOddCheck(age);

function evenOddCheck(num) {
    if (num % 2 == 0)
        return num;
    else {
        return num * 2;
    }
}

var result = evenOddCheck(13);
var square = result * result;
console.log("square", square);

function allEvenOddCheck(nums) {
    var even_array = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        var result = evenOddCheck(element);
        even_array.push(result);
    }
    return even_array;
}
var numbers_even = allEvenOddCheck(numbers);
console.log(numbers_even);