// 블럭 레벨 스코프
// 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프

let foo = 1;

{
    let foo = 2;
    let bar = 3;
}

console.log(foo);
console.log(bar);