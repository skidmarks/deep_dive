// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1*2* ... *(n-1)*n

function factorial(n) {
    // 탈출 조건:  n이 이하일 때 재귀 호출을 멈춘다.
    if(n <= 1) return 1;
    // 재귀 호출
    return n*factorial(n-1);
}

console.log("factorial(0) = " + factorial(0)); // 0! = 1
console.log("factorial(1) = " + factorial(1)); // 1! = 1
console.log("factorial(2) = " + factorial(2)); // 2! = 2
console.log("factorial(3) = " + factorial(3)); // 3! = 6
console.log("factorial(4) = " + factorial(4)); // 4! = 24
console.log("factorial(5) = " + factorial(5)); // 5! = 120
console.log("factorial(6) = " + factorial(6)); // 6! = 720


