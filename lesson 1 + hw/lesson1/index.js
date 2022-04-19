/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
var city = 'Odessa';
var country = 'Ukraine';
var population = 1015826;
var soccer_stadium = true;
/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
var height = 40;
var width = 70;
var area = height * width;
/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
var time = 2;
var speedOfFirst = 95;
var speedOfSecond = 114;
var result = 2*speedOfFirst - 2*speedOfSecond;
/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
// const randomNumber = Math.floor(Math.random() * 100);
// if (randomNumber < 20){
//     console.log("randomNumber меньше 20");
// }else if(randomNumber > 50){
//     console.log("randomNumber больше 50");
// }else{
//     console.log("randomNumber больше 20, и меньше 50");
// }
/* 
    Задание 5:

    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
const randomNumber2 = Math.floor(Math.random() * 100);

switch(randomNumber2){
    case randomNumber2 < 20: 
        console.log("randomNumber меньше 20");
        break;
    case randomNumber2 > 50:
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, и меньше 50");
}




