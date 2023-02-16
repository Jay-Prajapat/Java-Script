let memory = [];

var screen = document.querySelector("#numbtn");
var ans = document.querySelector("#previous-screen");
var btn = document.querySelectorAll("#numbtn");
var opr = document.querySelectorAll("#operator");

$("document").ready(() => {
  $("#numbtn").focus();

  $(":button").on("click", () => {
    $("#numbtn").focus();
  });
}); 

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;

    if (!(btnText == "." && screen.value.includes("."))) {
      screen.value += btnText;
    }
  });
}
for (item of opr) {
  item.addEventListener("click", (e) => {
    oprText = e.target.innerText;
    if (oprText == "x") {
      oprText = "*";
    } else if (oprText == "÷") {
      oprText = "/";
    } else if (oprText == "mod") {
      oprText = "%";
    } else if (oprText == "xy") {
      oprText = "^";
    }

    ans.innerHTML += screen.value;
    const operators = ["+", "-", "*", "/", ".", "%", "^"];
    let lastCharacter = ans.innerHTML[ans.innerHTML.length - 1];

    if (operators.includes(lastCharacter)) {
      ans.innerHTML = ans.innerHTML.slice(0, -1) + oprText;
    } else {
      ans.innerHTML += oprText;
    }

    screen.value = "";
  });
}

var inputBox = document.getElementById("numbtn");
var invalidChars = ["-", "+", "E", "e"];
inputBox.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

function compute() {
  if (ans.innerHTML.includes("logxy")) {
    ans.innerHTML += screen.value;
    let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf("l"));
    let num2 = ans.innerHTML.substring(
      ans.innerHTML.indexOf("y") + 1,
      ans.innerHTML.length + 1
    );
    let number = parseFloat(num1);
    let base = parseFloat(num2);
    updatePreviousScreen(Math.log10(number) / Math.log10(base));
    updateCurrentScreen("");
  } else if (ans.innerHTML.includes("yroot")) {
    ans.innerHTML += screen.value;
    let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf("y"));
    let num2 = ans.innerHTML.substring(
      ans.innerHTML.indexOf("t") + 1,
      ans.innerHTML.length + 1
    );

    let x = parseFloat(num1);
    let y = parseFloat(num2);
    updatePreviousScreen(Math.pow(x, 1 / y));
    updateCurrentScreen("");
  } else if (ans.innerHTML.includes("^")) {
    ans.innerHTML += screen.value;
    let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf("^"));
    let num2 = ans.innerHTML.substring(
      ans.innerHTML.indexOf("^") + 1,
      ans.innerHTML.length + 1
    );
    updatePreviousScreen(Math.pow(num1, num2));
    updateCurrentScreen("");
  } else {
    ans.innerHTML += screen.value;
    updatePreviousScreen(eval(ans.innerHTML));
    updateCurrentScreen("");
  }
}

function updateCurrentScreen(value) {
  screen.value = value;
}

function updatePreviousScreen(value) {
  ans.innerHTML = value;
}

function deleteChar() {
  updateCurrentScreen(screen.value.toString().slice(0, -1));
}

function clearAll() {
  updateCurrentScreen("");
  updatePreviousScreen("");
}

function negate() {
  screen.value *= -1;
}

function sqrt() {
  updateCurrentScreen(Math.sqrt(screen.value));
}

function factorial() {
  let i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f *= i;
  }
  i = i - 1;
  updateCurrentScreen(f);
}

function tenRestToX() {
  updateCurrentScreen(Math.pow(10, screen.value));
}

function log() {
  updateCurrentScreen(Math.log10(screen.value));
}

function naturalLOG() {
  updateCurrentScreen(Math.log10(screen.value) * 2.303);
}

function square() {
  updateCurrentScreen(Math.pow(screen.value, 2));
}

function divideByOne() {
  updateCurrentScreen(1 / screen.value);
}

function absolute() {
  ans.innerHTML = ans.innerHTML < 0 ? -1 * ans.innerHTML : ans.innerHTML;
}

function exponential() {
  updateCurrentScreen(screen.value * Math.pow(10, screen.value));
}

function pi() {
  updateCurrentScreen(Math.PI);
}

function EulersNumber() {
  updateCurrentScreen(Math.exp(1));
}

function cube() {
  updateCurrentScreen(Math.pow(screen.value, 3));
}

function cubeRoot() {
  updateCurrentScreen(Math.cbrt(screen.value));
}

function twoRx() {
  updateCurrentScreen(Math.pow(2, screen.value));
}

function yTHroot() {
  ans.innerHTML += screen.value + "yroot";
  updateCurrentScreen("");
}

function logxy() {
  ans.innerHTML = screen.value + "logxy";
  updateCurrentScreen("");
}

function eRestToX() {
  updateCurrentScreen(Math.exp(screen.value));
}

function sin() {
  updateCurrentScreen(Math.sin((screen.value * Math.PI) / 180));
}

function cos() {
  updateCurrentScreen(Math.cos((screen.value * Math.PI) / 180));
}

function tan() {
  updateCurrentScreen(Math.tan((screen.value * Math.PI) / 180));
}

function sec() {
  updateCurrentScreen(1 / Math.cos((screen.value * Math.PI) / 180));
}

function csc() {
  updateCurrentScreen(1 / Math.sin((screen.value * Math.PI) / 180));
}

function cot() {
  updateCurrentScreen(1 / Math.tan((screen.value * Math.PI) / 180));
}

function floor() {
  updateCurrentScreen(Math.floor(screen.value));
}

function ceil() {
  updateCurrentScreen(Math.ceil(screen.value));
}

function random() {
  updateCurrentScreen(Math.random());
}

function fe() {
  let length = screen.value.length;
  screen.value =
    parseFloat(screen.value) / Math.pow(10, length - 1).toString() +
    ".e+" +
    `${length - 1}`;
}

function memoryAdd() {
  if (memory.length == 0) {
    if (screen.value != "") {
      memory.push(parseFloat(screen.value));
    } else if (ans.innerHTML != "") {
      memory.push(parseFloat(ans.innerHTML));
    } else memory.push(0);
  } else {
    if (screen.value != "") {
      memory[memory.length - 1] =
        parseFloat(screen.value) + parseFloat(memory[memory.length - 1]);
    } else if (ans.innerHTML != "") {
      memory[memory.length - 1] =
        parseFloat(memory[memory.length - 1]) + parseFloat(ans.innerHTML);
    } else return;
  }
  screen.value = "";
}

function memoryMinus() {
  if (memory.length == 0) {
    if (screen.value != "") {
      memory.push(parseFloat(screen.value * -1));
    } else if (ans.innerHTML != "") {
      memory.push(parseFloat(ans.innerHTML * -1));
    } else memory.push(0);
  } else {
    if (screen.value != "") {
      memory[memory.length - 1] =
        parseFloat(memory[memory.length - 1]) - parseFloat(screen.value);
    } else if (ans.innerHTML != "") {
      memory[memory.length - 1] =
        parseFloat(memory[memory.length - 1]) - parseFloat(ans.innerHTML);
    } else return;
  }
  screen.value = "";
}

function memoryStore() {
  memory.push(parseFloat(screen.value));
  updateCurrentScreen("");
}

function memoryRead() {
  screen.value = memory[memory.length - 1];
}

function memoryClear() {
  memory = [];
}

let flag = true;
function changeFunction() {
  if (flag) {
    document.getElementById("second").style =
      "background-color:rgb(20, 176, 228);";
    document.getElementById(
      "square"
    ).innerHTML = `<button id="cube" onclick="cube()">x<sup>3</sup></button>`;
    document.getElementById(
      "sqrt"
    ).innerHTML = `<button  onclick="cubeRoot()"><sup>3</sup><i class='fas fa-square-root-alt'></i></button> `;
    document.getElementById("xPowy").innerHTML = ` 
        <button class="yThRoot" onclick="yTHroot()"><sup>y</sup><i class='fas fa-square-root-alt'
        style="font-weight: 0px;"></i></button> `;
    document.getElementById(
      "tenPowX"
    ).innerHTML = `<button onclick="twoRx()">2<sup>x</sup></button>`;
    document.getElementById(
      "log"
    ).innerHTML = `<button id="operator" onclick="logxy()" >log<sub>y</sub>x</button>`;
    document.getElementById(
      "ln"
    ).innerHTML = `<button onclick="eRestToX()" >e<sup>x</sup></button>`;
    flag = false;
  } else {
    document.getElementById("second").style =
      "    background-color: rgb(238, 238, 238)";
    document.getElementById(
      "square"
    ).innerHTML = `<button id="square" onclick="square()">x<sup>2</sup></button>`;
    document.getElementById(
      "sqrt"
    ).innerHTML = `<button id="sqrt"  onclick="sqrt()"><i class="fa-solid fa-square-root-variable"></i></button>`;
    document.getElementById(
      "xPowy"
    ).innerHTML = `<button id="operator">x<sup>y</sup></button> `;
    document.getElementById(
      "tenPowX"
    ).innerHTML = `<button id="tenPowX" onclick="tenRestToX()">10<sup>x</sup></button>`;
    document.getElementById(
      "log"
    ).innerHTML = `<button id="log" onclick="log()">log</button>`;
    document.getElementById(
      "ln"
    ).innerHTML = `<button id="ln" onclick="naturalLOG()">ln</button>`;
    flag = true;
  }
}
