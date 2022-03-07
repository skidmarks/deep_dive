// const 키워드와 객체
// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.

const person = {
    name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = "Kim";

console.log(person);

// 객체가 변경되더라도 변수에 할당된 **참조 값은 변경되지 않는다.**