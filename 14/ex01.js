var Counter = (function() {
    // private 변수

    var num = 0;

    return {
        increase() {
            return ++num;
        },

        decrease() {
            return --num;
        }
    };

}());

console.log(Counter.num);