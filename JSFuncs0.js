'use strict';

var a = Number(prompt('Indtast beløb'));
function addVat(a) {
   return a * 1.25;
}
function subVat(a) {
    return a - a * 0.25
}
function calcVat(a) {
    return a * 0.25
}

console.log(addVat(a));

console.log(subVat(a));

console.log(calcVat(a));