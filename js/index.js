const header = document.querySelector('header')
const navContainer = document.querySelector('.nav-container')
const busImg = document.querySelector('.home img')
const parag = document.querySelector('.text-content p')
const allParag = document.getElementsByTagName('p')
const title = document.querySelector('.logo-heading')
console.log('ppp', allParag)


busImg.addEventListener('click', (event) => {
    Array.from(allParag).forEach(para => {
        para.style.color = 'red'
    })
})
title.addEventListener('mouseover', (event) => {
    Array.from(allParag).forEach(para => {
        para.style.color = 'blue'
    })
})

// busImg.addEventListener('click', (event) => {
//     Array.from(allParag).forEach(para => {
//         para.style.color = color
//         const color = Math.random() * 7 - 2
//             console.log("Look" + color)
//             if (color > 4) {
//                 para.style.color = ('red')
//             }
//             else if (color > 3) {
//                 para.style.color = ('yellow')
//             }
        
//             else {
//                 para.style.color = ('blue')
//             }
//     })
// })


function headerColor(event) {
    header.style.backgroundColor = ('hotpink')
}
header.addEventListener('mouseover', headerColor)

function colorBack(event) {
    header.style.backgroundColor = ('')
}
header.addEventListener('mouseout', colorBack)

function firstParagColor(event) {
    parag.style.color = ('yellow')
}
navContainer.addEventListener('mouseover', firstParagColor)

function pBlue(event) {
    parag.style.color= ('blue')
}
navContainer.addEventListener('mouseout', pBlue)

window.addEventListener('load', (event) => {
    alert("KINDLY GO BACK TO WHERE YOU CAME FROM");
});

// Your code goes here
