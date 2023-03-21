// Задание 1 (вывести сообщение в консоль)

let showMessage = () => {
    console.log ('Я учу JavaScript!')
};

showMessage();

// Задание со звездочкой (является ли год високосным в григорианском календаре)

const checkYear = (year) => {
if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
    return('Високосный');

} else {
    return('Не високосный');
}
};

console.log(checkYear(2023));