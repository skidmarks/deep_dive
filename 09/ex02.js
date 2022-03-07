var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

console.log(message);

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당

var message2 = done && '완료';
console.log(message2);

var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee' 
};

console.log(person);

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

var foo = {
    '':''
};

console.log(foo);

var foo2 = {
    0: 1, 
    1: 2, 
    2: 3,
}

console.log(foo2);

var foo3 = {
    var: '',
    function: '',
};

console.log(foo3);

var foo4 = {
    name: 'Lee',
    name: 'Kim',
};

console.log(foo4);

var circle = {
    radius: 5, 
    getDiameter: function() {
        return 2*this.radius;
    }
};

console.log("circle's diameter = " + circle.getDiameter());







