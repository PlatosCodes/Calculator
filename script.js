const add = (x,y) => x+y;
const subtract = (x,y) => x+y;
const multiply = (x,y) => x*y;
const divide = (x,y) => y != 0 ? x/y : "You sneaky bastard -- you can't divide by 0!";

const operate = function(op,x,y) {
    return op(x,y)
};