// Your code goes here

//VARIABLES
const header = document.querySelector('header');
const logoHeading = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav-link:nth-of-type(3)');
const intro = document.querySelector('.intro');
const boat = document.querySelector('.img-fluid');
const map = document.querySelector('.img-content img');
const footer = document.querySelector('.footer')



window.addEventListener('load', (event) => {
    alert("KINDLY GO BACK TO WHERE YOU CAME FROM");
});
//headerEvents
function changeColor(event) {
    header.style.backgroundColor = ('hotpink');
}
header.addEventListener('mouseover', changeColor);

function colorBack(event) {
    header.style.backgroundColor = ('');
}
header.addEventListener('mouseout', colorBack);

//pictureEvents
function addBorder(event) {
    boat.style.border = 'solid black'
}
boat.addEventListener('click', addBorder);

function loseBoatBorder(event) {
    boat.style.border = ''
}
boat.addEventListener('mouseout', loseBoatBorder);

function redBorder(event) {
    map.style.border = '10px dashed purple'
}
map.addEventListener('dblclick', redBorder);
function loseMapBorder(event) {
    map.style.border = '';
}
window.addEventListener('scroll', loseMapBorder);




