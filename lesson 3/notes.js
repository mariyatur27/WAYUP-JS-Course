// DOM Elements - Document Object Model  

//Getting elements by class
const p = document.querySelector('.paragraph');

//Getting all elements of the same type
const divs = document.querySelectorAll('div');

//Changing Text
document.getElementById('html').innerHTML = "React JS";

//Adding a class if it is not there, and removing it if it is there
const div = document.getElementById('div');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    div.classList.toggle('hide');
})