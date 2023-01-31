
let memory = [];

var screen = document.querySelector('.current');
var ans = document.querySelector('.previous');
var btn = document.querySelectorAll('.numbtn');
var opr = document.querySelectorAll('.operator');




for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;


        if (!(btnText == '.' && screen.innerHTML.includes("."))) {
            screen.innerHTML += btnText;
        }

    });
}
for (item of opr) {
    item.addEventListener('click', (e) => {
        oprText = e.target.innerText;
        console.log(oprText);
        if (oprText == 'x') {
            oprText = '*';
        }
        if (oprText == '÷') {
            oprText = '/';
        }
        if (oprText == "mod") {
            oprText = '%';
        }

        ans.innerHTML += screen.innerHTML;
        const operators = ["+", "-", "*", "/", ".", "%"];
        let lastCharacter = ans.innerHTML[ans.innerHTML.length - 1];

        if (operators.includes(lastCharacter)) {
            ans.innerHTML = ans.innerHTML.slice(0, -1) + oprText;

        }
        else {
            ans.innerHTML += oprText;

        }

        screen.innerHTML = '';


    });
}

function compute() {
    if (ans.innerHTML.includes("logxy")) {
        ans.innerHTML += screen.innerHTML;
        let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf('l'));
        let num2 = ans.innerHTML.substring(ans.innerHTML.indexOf('y') + 1, ans.innerHTML.length + 1);
        let number = parseFloat(num1);
        let base = parseFloat(num2);
        ans.innerHTML = Math.log10(number) / Math.log10(base);
        screen.innerHTML = '';
    }
    else if (ans.innerHTML.includes("yroot")) {
        ans.innerHTML += screen.innerHTML;
        let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf('y'));
        let num2 = ans.innerHTML.substring(ans.innerHTML.indexOf('t') + 1, ans.innerHTML.length + 1);
        console.log(num1);
        console.log(num2);
        let x = parseFloat(num1);
        let y = parseFloat(num2);
        ans.innerHTML = Math.pow(x, 1 / y);
        screen.innerHTML = '';
    }
    else if (ans.innerHTML.includes('^')) {
        ans.innerHTML += screen.innerHTML;
        let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf('^'));
        let num2 = ans.innerHTML.substring(ans.innerHTML.indexOf('^') + 1, ans.innerHTML.length + 1);
        ans.innerHTML = Math.pow(num1, num2);
        screen.innerHTML = '';
    }
    else {
        ans.innerHTML += screen.innerHTML;
        ans.innerHTML = eval(ans.innerHTML);
        screen.innerHTML = '';
    }
   
}



function deleteChar() {
    console.log("delete");
    screen.innerHTML = screen.innerHTML.toString().slice(0, -1);
}

function clearAll() {
    screen.innerHTML = '';
    ans.innerHTML = '';
}

function negate() {
    screen.innerHTML *= (-1);
}

function pow() {
    ans.innerHTML += screen.innerHTML + '^';
    screen.innerHTML = '';
}

function sqrt() {
    screen.innerHTML = Math.sqrt(screen.innerHTML);
}

function factorial() {
    let i, num, f;
    f = 1;
    num = screen.innerHTML;
    for (i = 1; i <= num; i++) {
        f *= i;
    }
    i = i - 1;
    screen.innerHTML = f;
}

function tenRestToX() {
    screen.innerHTML = Math.pow(10, screen.innerHTML);
}

function log() {
    screen.innerHTML = Math.log10(screen.innerHTML);
}

function naturalLOG() {
    screen.innerHTML = Math.log10(screen.innerHTML) * 2.303;
}

function square() {
    screen.innerHTML = Math.pow(screen.innerHTML, 2);
}

function divideByOne() {
    screen.innerHTML = 1 / screen.innerHTML;
}

function absolute() {
    ans.innerHTML = (ans.innerHTML < 0) ? (-1) * ans.innerHTML : ans.innerHTML;
}

function exponential() {
    screen.innerHTML = screen.innerHTML * Math.pow(10, screen.innerHTML);
}

function EulersNumber() {
    screen.innerHTML = Math.exp(1);
}

function cube() {
    screen.innerHTML = Math.pow(screen.innerHTML, 3);
}

function cubeRoot() {
    screen.innerHTML = Math.cbrt(screen.innerHTML);
}

function twoRx() {
    screen.innerHTML = Math.pow(2, screen.innerHTML);
}

function yTHroot() {
    ans.innerHTML += screen.innerHTML + "yroot";
    screen.innerHTML = '';
}

function logxy() {
    ans.innerHTML = screen.innerHTML + "logxy";
    screen.innerHTML = '';
}

function eRestToX() {
    screen.innerHTML = Math.exp(screen.innerHTML);
}

function sin() {
    screen.innerHTML = Math.sin(screen.innerHTML * Math.PI / 180);
}

function cos() {
    screen.innerHTML = Math.cos(screen.innerHTML * Math.PI / 180);

}

function tan() {
    screen.innerHTML = Math.tan(screen.innerHTML * Math.PI / 180);

}

function sec() {
    screen.innerHTML = 1 / Math.cos(screen.innerHTML * Math.PI / 180);

}

function csc() {
    screen.innerHTML = 1 / Math.sin(screen.innerHTML * Math.PI / 180);

}

function cot() {
    screen.innerHTML = 1 / Math.tan(screen.innerHTML * Math.PI / 180);

}

function floor() {
    screen.innerHTML = Math.floor(screen.innerHTML);
}

function ceil() {
    screen.innerHTML = Math.ceil(screen.innerHTML);
}

function random() {
    screen.innerHTML = Math.random();
}

function fe() {
    let length = screen.innerHTML.length;
    screen.innerHTML = parseFloat(screen.innerHTML) / Math.pow(10, length - 1).toString() + ".e+" + `${length - 1}`;
    console.log();
}

function memoryAdd() {
    if (memory.length == 0) {
        if (screen.innerHTML != '') {
            memory.push(parseFloat(screen.innerHTML));
        }
        else if (ans.innerHTML != '') {
            memory.push(parseFloat(ans.innerHTML));
        }
        else
            memory.push(0);
    }
    else {
        if (screen.innerHTML != '') {
            memory[memory.length - 1] = parseFloat(screen.innerHTML) + parseFloat(memory[memory.length - 1]);
        }
        else if (ans.innerHTML != '') {
            memory[memory.length - 1] = parseFloat(memory[memory.length - 1]) + parseFloat(ans.innerHTML);
        }
        else
            return;
    }
    screen.innerHTML = '';
    console.log(memory)
}

function memoryMinus() {

    if (memory.length == 0) {
        if (screen.innerHTML != '') {
            memory.push(parseFloat(screen.innerHTML * (-1)));
        }
        else if (ans.innerHTML != '') {
            memory.push(parseFloat(ans.innerHTML * (-1)));
        }
        else
            memory.push(0);
    }
    else {
        if (screen.innerHTML != '') {
            memory[memory.length - 1] = parseFloat(memory[memory.length - 1]) - parseFloat(screen.innerHTML);
        }
        else if (ans.innerHTML != '') {
            memory[memory.length - 1] = parseFloat(memory[memory.length - 1]) - parseFloat(ans.innerHTML);
        }
        else
            return
    }
    screen.innerHTML = '';
    console.log(memory)
}

function memoryStore() {
    memory.push(parseFloat(screen.innerHTML));
    console.log(memory);
    screen.innerHTML = '';
}

function memoryRead() {
    screen.innerHTML = memory[memory.length - 1];
}

function memoryClear() {
    memory = [];
    console.log(memory);
}

let flag = true;
function changeFunction() {
    if (flag) {
        document.getElementById('second').style = "background-color:rgb(20, 176, 228);";
        document.getElementById('square').innerHTML = `<button id="cube" onclick="cube()">x<sup>3</sup></button>`;
        document.getElementById('sqrt').innerHTML = `<button  onclick="cubeRoot()"><sup>3</sup><i class='fas fa-square-root-alt'></i></button> `;
        document.getElementById('xPowy').innerHTML = ` 
        <button class="yThRoot" onclick="yTHroot()"><sup>y</sup><i class='fas fa-square-root-alt'
        style="font-weight: 0px;"></i></button> `;
        document.getElementById('tenPowX').innerHTML = `<button onclick="twoRx()">2<sup>x</sup></button>`;
        document.getElementById('log').innerHTML = `<button class="operator" onclick="logxy()" data-operation>log<sub>y</sub>x</button>`;
        document.getElementById('ln').innerHTML = `<button onclick="eRestToX()" data-operation>e<sup>x</sup></button>`;
        flag = false;
    }
    else {
        document.getElementById('second').style = "    background-color: rgb(238, 238, 238)";
        document.getElementById('square').innerHTML = `<button id="square" onclick="square()">x<sup>2</sup></button>`;
        document.getElementById('sqrt').innerHTML = `<button id="sqrt" data-operation onclick="sqrt()"><i class="fa-solid fa-square-root-variable"></i></button>`;
        document.getElementById('xPowy').innerHTML = `<button id="xPowy" onclick="pow()">x<sup>y</sup></button> `;
        document.getElementById('tenPowX').innerHTML = `<button id="tenPowX" onclick="tenRestToX()">10<sup>x</sup></button>`;
        document.getElementById('log').innerHTML = `<button id="log" onclick="log()">log</button>`;
        document.getElementById('ln').innerHTML = `<button id="ln" onclick="naturalLOG()">ln</button>`;
        flag = true;
    }
}
