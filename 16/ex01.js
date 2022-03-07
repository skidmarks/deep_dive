const obj = {};
// obj.[[Prototype]];

obj.__proto__;

console.log(obj.__proto__);

const person = {
    name: 'Ellie',
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'age'));