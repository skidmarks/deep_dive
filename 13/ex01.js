// var x, y;

function add(x, y) {
    console.log(x, y);
    return x + y;
}

console.log(add(2, 5))
// 함수에 return 값이 만들어 지고 그게 메모리에 저장되고, 메모리 주소가 결정된다.

console.log(this);
console.dir(globalThis);
