function externalFun(){
    document.getElementById('demo').innerHTML="External Function has changed the text."
}

let a = 120,b = 20;
a = 10;
b = 9;
let c=a+b;
document.getElementById("demo").innerHTML=c;
let $  = 32;
let $$ = 67;
let $ans = $ + $$;
document.getElementById("demo").innerHTML = $ans;
//creating a constant array
const cars = ["volvo","BMW", "Saab"];
 cars[2] = "toyota";
 cars.push("Audi");

 document.getElementById("demo").innerHTML=cars;

 //creating a constan object
 const car = {type:'flat',model:'200',color:'white'};
 car.color = 'red';
 car.owner = 'Jay';

 document.getElementById("demo").innerHTML = " car owner is " + car.owner;

 let text1 = "Jay";
 let text2 = "Prajapati";

 //var fullName = text1 + text2;

 text1 += text2;
 fullName = text1;
document.getElementById("demo").innerHTML = text1;

console.log( typeof(cars));
//function to add two numbers
function add(op1,op2){
    return op1 + op2;
}

document.getElementById("demo").innerHTML = add(3,7);

const person = {
    name : "Jay",
    surname : "Prajapati",
    age : 21,
};

document.getElementById("demo").innerHTML = person.name + " " + person.surname + " is " + person.age + " years old."

let text = "Apple, Banana, Kiwi";
let t1 = text.substr(7,9);
document.getElementById('demo').innerHTML = t1;
let r = text.replace("Banana","Orange");
document.getElementById('demo').innerHTML = r;
console.log(t1);

//converting string to an array using split method

let str = "a,b,c,d,e,f";
let myArray = str.split(",");
document.getElementById('demo').innerHTML = myArray[0];

//use of indexOf method
let str1 = "please locate where 'locate' occurs."
document.getElementById('demo').innerHTML = str1.lastIndexOf('locate');

//use of string search() method

document.getElementById('demo').innerHTML = str1.search("locate");

//use of match method
let str2 = "The rain in SPAIN stays mainly in the plain."
const myArray1 = str2.match(/ain/gi);
document.getElementById('demo').innerHTML = myArray1.length + " " + myArray1;

//use of matchAll() method.
let str3 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = str3.matchAll(/Cats/gi);
//document.getElementById('demo').innerHTML = Array.from(iterator) + " " + iterator;
console.log(Array.from(iterator));

//use of includes() method
console.log(str3.includes("Cats"));

//use of startsWith() method
console.log(str3.startsWith("I"));
console.log(str3.startsWith("cats",7));

//use of back-tick `` to define a string
let str4 = `hello world
he's often 
called "john"`;

document.getElementById('demo').innerHTML = str4;

//variable substitustion
let fname = "jay";
let lname = "prajapati"

let fullname = `Welcome ${fname} ${lname} !`;
console.log(fullname);

let price = 10;
let vat = 0.25;
let total = `total : ${(price * (1 + vat)).toFixed(3)}`

console.log(total);

//html template
let header = "Templates Literals";
let tags  = ["template literals","javascript","es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
  }
  
  html += `</ul>`;
document.getElementById('demo').innerHTML = html;

console.log(Number.isSafeInteger(10));

x = 9.656;
console.log(x.toExponential(2));
console.log(x.toFixed(2));
console.log(x.toPrecision(2));

console.log(3>2>1);
console.log(Number(true));