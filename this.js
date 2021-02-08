const myObject = {
    name: 'Raufu',
    getFullName: function() {
        console.log(this);
        return "Mr. " + this.name;
    }
}

const anotherObject = {
    name: "Prezens"
}
anotherObject.getFullName = myObject.getFullName
console.log(anotherObject.getFullName)

myObject.getFullName();
anotherObject.getFullName();

function add(a, b) {
    console.log(this);
    return a + b
}

add(12, 13)