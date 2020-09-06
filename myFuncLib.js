//Fahrenheit til Celsius
var f = Number(prompt('Enter temperature in Fahrenheit'));
var c = 5/9 * (f-32);

function C2F(c) {
    return 5/9 * (f-32);
}

console.log(C2F(c));

//Celsius til Fahrenheit
var c = Number(prompt("Enter temperature in Celsius"));
var f = c * 1.8+32;

function F2C(f) {
    return c * 1.8+32;
}

console.log(F2C(f));