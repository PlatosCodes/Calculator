//Screen Display
const screen = document.querySelector('.screen-text h1')

//Calculator Functions
const add = (x,y) => x+y;
const subtract = (x,y) => x+y;
const multiply = (x,y) => x*y;
const divide = (x,y) => y != 0 ? x/y : "You sneaky bastard -- you can't divide by 0!";

//Operate after receiving inputs
const operate = function(op,x,y) {
    return op(x,y)
};

//Turns Mathematic Functions into operator keys for Operate function
var ops = [...document.querySelectorAll(".ops")];
ops = ops.forEach(op => op.addEventListener('click', () => screen.textContent = (op.textContent)));

var nums = [...document.querySelectorAll(".nums")];
nums = nums.forEach(op => op.addEventListener('click', () => screen.textContent = (op.textContent)));

const clear = document.querySelector("#clear").addEventListener('click', (op) => 
    console.log((document.querySelector("#clear").id)));

const equals = document.querySelector("#equals").addEventListener('click', pressEquals);


//CLEAR ALL INPUTS WHEN DIVIDE BY 0 OCCURS (IN ADDITIO TO RETURNING THE CHEEKY MESSAGE)

var entered = false

var get_num1 = function() {{
    if (screen.textContent == 0) {
        screen.textContent = op.textContent;
    } else {
        screen.textContent += op.textContent;
    }
    } 
};

var pressEquals = function() {
    entered = true;
};


