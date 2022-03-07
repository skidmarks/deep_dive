let foo = 1;    // 전역 변수

{
    console.log(foo);   // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2;    //지역변수
}
// let 키워드로 선언한 변수의 경우 변수 호이스팅이 발생하지 않는다면 위 예제는 전역 변수 foo의 값을 출력해야 한다.
// 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생한다.