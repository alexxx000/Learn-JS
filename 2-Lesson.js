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

// let a = -5;
// let b = +5;
// if (a > -1 & b > -1) {
//     console.log(a - b);
//     alert(a - b);
// } else if (a < -1 & b < -1) {
//     console.log(a * b);
//     alert(a * b);
// } else if ((a < -1 & b > -1) || (a > -1 & b > -1)) {
//     console.log(a + b);
//     alert(a + b)
// } else {
//      console.log('Не правильный ввод');
// }

// Задание 4

// let b = prompt('введите число от 0 до 15');
// let a = +b

// switch (a) {
//     case 0:
//         console.log(0);
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     // break;
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);
//         break;
//     default:
//         console.log('Число не попадает в диапазон');
// }

// Задание 5

// function addition(x, y) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
//     if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

//     return x + y;
// }
// console.log(addition(5, 6.2));

// function subtraction(x, y) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
//     if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

//     return x - y;
// }
// console.log(subtraction(362, 239));

// function multiplication(x, y) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
//     if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

//     return x * y;
// }
// console.log(multiplication(362, 239));

// function division(x, y) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
//     if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

//     return x / y;
// }
// console.log(division(362, 239));

//Задание 6

function addition(x, y) {
    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
    if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

    return x + y;
}

function subtraction(x, y) {
    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
    if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

    return x - y;
}

function multiplication(x, y) {
    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
    if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

    return x * y;
}

function division(x, y) {
    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
    if (y <= 0 || !Number.isInteger(y)) return 'Задайте целое положительное число';

    return x / y;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'сложить': return addition(a, b);
        case 'вычесть': subtraction(a, b);
        case 'умножить': return multiplication(a, b);
        case 'разделить': return division(a, b);

        default:
            console.log('Число не попадает в диапазон');
    }
}
let firstArg = +prompt('введите первое целое положительное число');
let secondtArg = +prompt('введите второе целое положительное число');
console.log(mathOperation(firstArg, secondtArg, 'умножить'));
alert(mathOperation(firstArg, secondtArg, 'умножить'));