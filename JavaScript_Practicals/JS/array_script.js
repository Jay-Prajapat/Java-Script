const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
console.log("err")

document.getElementById('demo2').innerHTML=Array.isArray(fruits);

document.getElementById('demo2').innerHTML = fruits.toString();

document.getElementById('demo2').innerHTML = fruits.join(" * ");

document.getElementById('demo2').innerHTML = fruits.sort();

document.getElementById('demo2').innerHTML = fruits.reverse();

const points = [20,40,5,64,859,102,321];

document.getElementById('demo2').innerHTML = points.sort(function(a,b) {return a-b});

document.getElementById('demo2').innerHTML = Math.min.apply(null,points);

let txt = "";
points.forEach(myFun);

function myFun(value){
    txt += value + '<br>'
}

document.getElementById('demo2').innerHTML = txt;

const over50 = points.filter(myfun);
function myfun(value){
    return  value> 50;
}

document.getElementById('demo2').innerHTML = '<br>' + over50;

const f = fruits.entries();

for(let x of f){
    document.getElementById('demo2').innerHTML += x + '<br>';
}

const d = new Date();
document.getElementById('demo2').innerHTML = d.getUTCFullYear();