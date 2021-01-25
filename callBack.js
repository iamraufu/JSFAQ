function callBack(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

function learnJS() {
    console.log("You have to learn JavaScript");
}

function learnPython() {
    console.log("You have to learn Python");
}
callBack('Raufu', 21, learnJS);
callBack('Prezens', 23, learnPython);