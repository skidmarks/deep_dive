// lexical scoop cheating

function foo(str, a) {
    eval(str); // cheating!
    console.log(a, b);
}

var b = 2;
foo("var b = 3;", 1);


var colors = ['red', 'white', 'orange'];
let [, second] = colors;
let [, , third] = colors;

console.log(second);
console.log(third);

let [first] = ['red', 'white', 'orange'];
console.log(first);






