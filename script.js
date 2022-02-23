
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

cardsArray.sort(() => 0.5 - Math.random())

const startBox = document.querySelector('.start-box')
const Grid = document.querySelector('.grid')
const winBox = document.querySelector('.win-box')

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

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

function checkForMatch() {
    Grid.style.pointerEvents = 'auto'
    const Cards = document.querySelectorAll('.card')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] == cardsChosen[1]) {
        Cards[optionOneId].style.opacity = '0'
        Cards[optionTwoId].style.opacity = '0'
        Cards[optionOneId].style.pointerEvents = 'none'
        Cards[optionTwoId].style.pointerEvents = 'none'
        cardsWon.push(cardsChosen)
    } else {
        Cards[optionOneId].setAttribute('src', 'img/verse.png')
        Cards[optionTwoId].setAttribute('src', 'img/verse.png')
    }

    cardsChosen = []
    cardsChosenId = []
    
    if (cardsWon.length == cardsArray.length/2) {
        setTimeout(() => {
            Grid.classList.add('hide')
            winBox.classList.remove('hide')
        }, 600)
    }
}

function flipCard() {
    const cardId = this.getAttribute('id')
    cardsChosen.push(cardsArray[cardId].src)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].src)
    if (cardsChosen.length == 2) {
        Grid.style.pointerEvents = 'none'
        setTimeout(checkForMatch, 500)
    }
}

startPlayArea()

function start() {
    startBox.classList.add('hide')
    Grid.classList.remove('hide')
}

function replay() {
    window.location.reload()
}