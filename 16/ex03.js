const person = {
    firstName: 'kidong',
    lastName: 'Do',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.firstName + ' ' + person.lastName);

person.fullName = 'Heegun Lee';
console.log(person);

console.log(person.fullName);

console.log(person);