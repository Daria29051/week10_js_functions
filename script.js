// Задание 1 (вывести сообщение в консоль)

let showMessage = () => {
    console.log ('Я учу JavaScript!')
};

showMessage();



// Задание со звездочкой (является ли год високосным в григорианском календаре)

const checkYear = (year) => {
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return('Високосный');

} else {
    return('Не високосный');
}
};

console.log(checkYear(2016));



// Галерея с несколькими картинками

let btn_prev = document.querySelector('.gallery1__btn-switch-prev'),
    btn_next = document.querySelector('.gallery1__btn-switch-next');
    
let images = document.querySelectorAll('.gallery1__photo img');
let i = 0;
btn_prev.onclick = function(){
   images[i].className = "";
    i = i-1;
    if( i < 0){
      i = 0;  
    }
    images[i].className = "shown";
};

btn_next.onclick = function(){
    images[i].className = "";
    i = i+1; 
    if( i >= images.length){
      i = images.length-1;  
    }
    images[i].className = "shown";
};

