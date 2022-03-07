// 레이블 문이란 식별자가 붙은 문을 말한다.
// 레이블 문, 반목분, switch 문의 코드 블럭 이외에 break 문을 사용하면 syntaxError(문법 에러)가 난다.


foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log("Done");

foo: console.log('foo');

console.log('fff000');



