
const cardsArray = [
    {
        src: 'img/butterfly.png'
    },
    {
        src: 'img/butterfly.png'
    },
    {
        src: 'img/cat.png'
    },
    {
        src: 'img/cat.png'
    },
    {
        src: 'img/fox.png'
    },
    {
        src: 'img/fox.png'
    },
    {
        src: 'img/koala.png'
    },
    {
        src: 'img/koala.png'
    },
    {
        src: 'img/sheep.png'
    },
    {
        src: 'img/sheep.png'
    },
    {
        src: 'img/snake.png'
    },
    {
        src: 'img/snake.png'
    },
]

const startBox = document.querySelector('.start-box')
const Grid = document.querySelector('.grid')

function startPlayArea() {
    for (let i = 0 ; i < cardsArray.length ; i++) {
        const Card = document.createElement('img')
        Card.classList.add('card')
        Card.setAttribute('src', 'img/verse.png')
        Card.setAttribute('id', i)
        Card.addEventListener('click', flipCard)
        Grid.appendChild(Card)
    }
}


function flipCard() {

}

startPlayArea()

function start() {
    startBox.classList.add('hide')
    Grid.classList.remove('hide')
}

function replay() {
    window.location.reload()
}