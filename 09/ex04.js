// ES6 프로퍼티 축약 표현

// ES5
var x = 1, y = 2;

var obj = {
    x: x, 
    y: y,
};

console.log(obj);

// ES6
let a = 1, b = 2;

// 프로퍼티 축약 표현
const obj2 = {a, b};

console.log(obj2);

