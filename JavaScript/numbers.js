let number1 = Number(prompt("Введите первое число:"));
let number2 = Number(prompt("Введите второе число:"));

if (number1 > number2) {
    console.log("Первое число больше");
} else if (number2 > number1) {
    console.log("второе число больше");
} else {
    console.log("Числа равны");
}