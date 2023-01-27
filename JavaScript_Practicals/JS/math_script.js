document.getElementById('demo').innerHTML = Math.SQRT1_2;

document.getElementById('demo').innerHTML = Math.ceil(4.3);

document.getElementById('demo').innerHTML = Math.round(5.6);

document.getElementById('demo').innerHTML = Math.trunc(5.6);

document.getElementById('demo').innerHTML = Math.pow(5, 6);

document.getElementById('demo').innerHTML = Math.sqrt(64);

document.getElementById('demo').innerHTML = Math.sin(90 * Math.PI / 180);

document.getElementById('demo').innerHTML = Math.round(5.6);

document.getElementById('demo').innerHTML = Math.min(56, 885, 41, 854, 54, 54);

document.getElementById('demo').innerHTML = Math.max(56, 885, 41, 854, 54, 54);

document.getElementById('demo').innerHTML = Math.random();

document.getElementById('demo').innerHTML = Math.log2(8);

document.getElementById('demo').innerHTML = Math.floor(Math.random() * 100);

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('demo').innerHTML = getRndInt(1, 100);

document.getElementById('demo').innerHTML = Boolean(1);

const num = [45, 54, 1251, 21, 12, 484, 7];
let text = "";

for (const x of num) {
    text += x + '<br>';
}
document.getElementById('demo').innerHTML = text;
text = "";
const set_item = new Set(["a", "b", "c"]);
set_item.forEach(function (value) {
    text += value;
});


const fruits = new Map([["apple", 500], ["banana", 200], ["orange", 300]]);
console.log(fruits.get("orange"));

let txt = "welcome to simform";
let n = txt.search("simform");
console.log(n);

text = "100 % sure";
console.log(text.match(/\s/g));

const person = {
    firstName: "Jay",
    lastName: "Prajapati",
    id: 465432,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

//use of arrow function
let myFun = (a, b) => a * b;
document.getElementById('demo').innerHTML = myFun(4, 5);

let hello = "";
hello = () => {
    return "hello world";
}

document.getElementById('demo').innerHTML = hello();

hello = (val) => {
    return "hello" + val;
}

document.getElementById('demo').innerHTML = hello("jay");

//use of class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();

const car = new Car("BMW", 2014);
document.getElementById('demo').innerHTML = car.age(year);

//use of JSON object
let text1 = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text1);
document.getElementById('demo').innerHTML = obj.employees[1].firstName;