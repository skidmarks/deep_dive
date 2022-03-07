
// console.log(score);

// score = 80;

// var score;

// console.log(score);

// var first = "Ung-mo";
// var last = "Lee";

// console.log(`My name is ${first} ${last}.`);

// var foo = true;
// console.log(foo);

// var faa;
// console.log(faa);
// faa = "test";
// console.log(faa);

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: 'John',
//         age:50
//     };

//     return person;
// }

// var personObj1 = {
//     name: 'Alex',
//     age:30
// };

// var personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);

// // 심벌 값 생성
// var key = Symbol('key');
// console.log(typeof key);
// console.log(key)

// // 객체 생성
// var obj = {};

// // 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
// obj[key] = "value";
// console.log(obj[key]);

let symbolWithDesc = Symbol('UngMo2');
console.log(symbolWithDesc);
console.log(symbolWithDesc === Symbol("UngMo2"));








