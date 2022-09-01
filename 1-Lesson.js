"use strict";
// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 ++ приходит перед своим операндом,pre-increment
// d = b++; alert(d);           // 1 ++ приходит после своего операнда, post-increment
// c = (2+ ++a); alert(c);      // 5 в переменной а === 3 так как ++ раньше операнда
// d = (2+ b++); alert(d);      // 4 в переменной а === 2 так как ++ позже операнда
// alert(a);                    // 3 так как increment
// alert(b);                    // 3 так как increment

// Задание 2
// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x);
//ответ: x = 5 (перемножить и присвоить), далее сложить

// Задание 3

let a = -5;
let b = +5;
if (a > -1 & b > -1) {
    console.log(a - b);
    alert(a - b);
} else if (a < -1 & b < -1) {
    console.log(a * b);
    alert(a * b);
} else if ((a < -1 & b > -1) || (a > -1 & b > -1)) {
    console.log(a + b);
    alert(a + b)
} else {
     console.log('Не правильный ввод');
}
