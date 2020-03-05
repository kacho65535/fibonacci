'use strict';
const length = 100;
var vec = Array(length);
vec.fill(0);
function fib(n) {
    if (n <= 1) return 1;
    else {
        if (vec[n] != 0) return vec[n];
        else return vec[n] = fib(n - 1) + fib(n - 2);
    }
}
for (let i = 0; i < length; i++) {
    console.log(fib(i));
}