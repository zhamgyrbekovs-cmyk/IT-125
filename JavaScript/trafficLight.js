let color = prompt("Введите цвет светофора:");

if (color === "красный") {
    console.log("Стой!");
} else if (color === "желтый") {
    console.log("Жди!");
} else if (color === "зеленый") {
    console.log("Иди!");
} else {
    console.log("Такого цвета нет!");
}