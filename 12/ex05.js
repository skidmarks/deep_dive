// 외부에서 전달받은 f를 n만큼 반복 호출한다.

function repeat(n, f) {
    for(var i = 0; i < n; i++) {
        f(i); // i를 전달하면서  f를 호출한다.
    }
}

var i = "전역 i";

var logAll = function(a) {
    console.log(a);
};


// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);

var logOdds = function(b) {
    if (b % 2) {
        console.log(b);
    }
}

var normals = function() {
    console.log(i);
}

repeat(5, logOdds);

repeat(10, normals);

// var logEvens = function(i) {
//     if (!(i % 2)) console.log(i);
// }

// repeat(5, logEvens);

repeat(10, function() {console.log('TEST')});



