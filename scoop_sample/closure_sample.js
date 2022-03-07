// 클로저의 예시
// name 변수는 어떻게 outer 함수가 종결 됐으면서도 참조를 할 수 있게 되어 있나?
// 

function outer() {
    const name = "Kyle";
    console.log("in the 'outer function' variable-name: name, variable-name-value: " + name);

    return function inner() {
        const greeting = "Hello! ";
        console.log(greeting, name);
    }
}

const getKyle = outer();
getKyle();


// 클로저가 필요한 이유

// 1. 전역변수를 줄일 수 있다.
// const btn = document.querySelector('button');

// btn.addEventListener('click', handleClick)

// let count = 0;
// function handleClick() {
//     count++;
//     return count;
// }

// 위 예제에서  count는 전역변수!
// const btn = document.querySelector('button');

// btn.addEventListener('click', handleClick())

// function handleClick() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// 2. 비슷한 형태의 코드를 재사용률을 높일 수 있습니다.
const newTag = function(open, close) {
    return function(content) {
        return open + content + close;
    }
}

const bold = newTag('<b>', '</b>');
const italic = newTag('<i>', '</i>');

console.log(bold(italic("This is my content!")))


// for문과 var을 쓸 때는 조심해야 한다.

let funcArr = [];

for(var i = 0; i < 5; i++) {
    var c = i*2;
    funcArr.push((_) => console.log(c))
}
funcArr.forEach( fn => fn() )

// 이 문제를 클로저로 해결하는 방법

let funcArr = [];

for(var i = 0; i < 5; i++) {
    ( (_) => {
        var c = i*2;
        funcArr.push( (_) => console.log(c) )
    })() // 즉시 실행 함수
}

funcArr.forEach( f => f() )





