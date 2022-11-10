//Screen Display
const screen = document.querySelector('.screen-text h1')

//Calculator Functions
const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => y != 0 ? x/y : "You sneaky bastard -- you can't divide by 0!";

//Performs operation after receiving inputs
const operate = function(op,x,y) {
    n = Number(x), m = Number(y);
    reset();
    if (op == 'add') {
        screen.textContent = add(n,m);
        num1 = screen.textContent;
        return add(n,m);
    } else if (op == "subtract") {
        screen.textContent = subtract(n,m);
        num1 = screen.textContent;
        return subtract(n,m);
    } else if (op == "multiply") {
        screen.textContent = multiply(n,m);
        num1 = screen.textContent;
        return multiply(n,m);
    } else {
        screen.textContent = divide(n, m);
        num1 = screen.textContent;
        return divide(n,m);
    }
};

//Turns Mathematic Functions into operator keys for Operate function
var plus = document.querySelector('#add');
plus.addEventListener('click', () => pressPlus());

var sub = document.querySelector('#subtract');
sub.addEventListener('click', () => pressSub());

var mul = document.querySelector('#multiply');
mul.addEventListener('click', () => pressMul());

var divi = document.querySelector('#divide');
divi.addEventListener('click', () => pressDivi());

var justFinished = false

var nums = [...document.querySelectorAll(".nums")];
nums = nums.forEach(op => op.addEventListener('click', () => (
    ((screen.textContent == 0 || justFinished) ? ((screen.textContent = op.textContent) && (justFinished = false)) : (screen.textContent += op.textContent)
))));


const clear = document.querySelector("#clear").addEventListener('click', () => ((screen.textContent = 0) && reset));


const equals = document.querySelector("#equals").addEventListener('click', () => (
    pressEqual()
));


var chosenOperator = null;
var num1 = null;
var num2 = null

const reset = function() {
    screen.textContent = 0, chosenOperator = null, num1 = null, num2 = null;
}

var pressPlus = function() {
    if (num1) {
        num1 = operate('add', num1, screen.textContent);
    } else {
        num1 = screen.textContent;
    }
    chosenOperator = 'add';
    justFinished = true;
};

var pressSub = function() {
    if (num1) {
        num1 = operate('subtract', num1, screen.textContent);
    } else {
        num1 = screen.textContent;
    }
    chosenOperator = 'subtract';
    justFinished = true;
};

var pressMul = function() {
    if (num1) {
        num1 = operate('multiply', num1, screen.textContent);
    } else {
        num1 = screen.textContent;
    }
    chosenOperator = 'multiply';
    justFinished = true;
};

var pressDivi = function() {
    if (num1) {
        num1 = operate('divide', num1, screen.textContent);
    } else {
        num1 = screen.textContent;
    }
    chosenOperator = 'divide';
    justFinished = true;
};

var pressEqual = function() {
    if (num1 && chosenOperator) {
        operate(chosenOperator, num1, screen.textContent);
        num1 = null;
        justFinished = true;
    } else{
    num1 = screen.textContent;
    };
}







//TO-DO
//CLEAR ALL INPUTS WHEN DIVIDE BY 0 OCCURS (IN ADDITION TO RETURNING THE CHEEKY MESSAGE)