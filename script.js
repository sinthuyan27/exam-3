//3//
let array = [1, 2, 3, 4, 5];
let firstElement = array[0];
let lastElement = array[array.length - 1];

console.log(firstElement);
console.log(lastElement);

//4//
let loop = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//8//
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//9//
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person('Alice', 30);
console.log(person1.name);
console.log(person1.age);


//10//
let check = { a: 1, b: 2, };
console.log('a' in check);
console.log('c' in check);










