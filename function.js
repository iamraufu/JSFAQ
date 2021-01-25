numbers = [5, 12, 23, 11, 29, 40];
age = [13, 17, 15, 19, 21, 23];

allEvenOddCheck(numbers);
allEvenOddCheck(age);

function evenOddCheck(num) {
    if (num % 2 == 0)
        console.log(num, ': is even number')
    else {
        console.log(num * 2, ': is odd number')
    }
}

function allEvenOddCheck(nums) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        evenOddCheck(element);
    }
}