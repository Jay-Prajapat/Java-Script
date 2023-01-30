const person = {
    firstName: "Jay",
    lastName: "Prajapati",
    age : 21,
    language: "en",
    clr: "",
    get leng() {
        return this.language
    },
    set color(color) {
        this.clr = color;
    }
};

person.nationality = "Indian";
document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
let txt = "";
delete person.age;
for (const x in person) {
    txt += person[x];
}

document.getElementById('demo').innerHTML = txt;

document.getElementById('demo').innerHTML = Object.values(person);

let mystring = JSON.stringify(person);
document.getElementById('demo').innerHTML = mystring;

console.log(person.leng);
person.color = "red";
document.getElementById('demo').innerHTML = Object.values(person);

function Person(first,last,age,color){
    this.first = first;
    this.last = last;
    this.age = age;
    this.color = color;
}

const father = new Person("Jhon","Doe",21,"Red");
const mother = new Person("Sally","Rally",48,"green");
document.getElementById('demo').innerHTML = father.first + ' ' + mother.first;
