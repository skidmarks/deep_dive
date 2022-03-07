//ES5

// var prefix = 'prop';
// var i = 0;

// var obj = {};

// // 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;

// console.log(obj);

// ES6
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
};

console.log(obj);

var obj2 = {
    name: 'Lee', 
    sayHi: function() {
        console.log('Hi! ' + this.name);
    },
};

obj2.sayHi();

let name = 're-Hi-Name';

var obj3 = {
    name: 'Lee',
    // 메서드 축약 표현
    // ES6에서는 메서드를 정의할 때 function키워드를 생략한 축약 표현을 사용할 수 있다.
    sayHi(name) {
        console.log('re-Hi! ' + this.name);
    },
};

obj3.sayHi(name);

console.log(name);