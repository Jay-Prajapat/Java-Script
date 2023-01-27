const x = function(a,b) {return a * b};
document.getElementById('demo').innerHTML = x(4,5);

let c = (x,y) => {return x*y};
document.getElementById('demo').innerHTML = c(5,8);

function sum(...args){
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
document.getElementById('demo').innerHTML = sum(56,45,78,54,41565,1325,231); 

const person = {
    fullName: function(city,country){
        return this.firstName + " " + this.lastName + " " + city + ' ' + country; 
    }
}
const person1 = {
    firstName: "Jay",
    lastName: "Prajapati"
}
document.getElementById('demo').innerHTML = person.fullName.call(person1,"Vyara","India");

class Car{
    constructor(brand){
        this.carname = brand;
    }
    persent(){
        return 'I have a' + this.carname;
    } 
}

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.persent() + ' it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById('demo').innerHTML = myCar.show();

// use of async
setTimeout(myFunction,3000);
function myFunction(){
    document.getElementById('demo').innerHTML = "Hi , Jay"
}