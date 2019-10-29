//cards array
let cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    }, {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]

//score selector for use in checkForMatch and flipCard
let score = document.createElement("p")

//cardsInPlay array and score counter
let cardsInPlay = []
let scoreCount = 0

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");   
        scoreCount += 1  
        score.textContent = scoreCount  
    } else {
        alert("Sorry, try again.");
    }
}

function flipCard() {
    //get index of clicked img, push suit into Array, set img to cardImage
    let cardId = this.getAttribute("data-id")
    cardsInPlay.push(cards[cardId].rank)
    this.setAttribute("src", cards[cardId].cardImage)

    // console.log("User flipped " + cards[cardId].rank);
    // console.log(cards[cardId].cardImage)
    // console.log(cards[cardId].suit)

    if (cardsInPlay.length === 2) {
        //if reset button doesnt exist, create one
        if (!document.querySelector("button")) {
            let reset = document.createElement("button")
            reset.textContent = "Reset"
            //reset each cardImage to card back and remove reset button on click
            reset.addEventListener("click", function(){
                let cardElement = document.querySelectorAll("img")
                cardElement.forEach(function(card){
                    card.setAttribute("src", "images/back.png")
                    reset.remove()
                })
            })
            document.querySelector("main").appendChild(reset)
        }
        checkForMatch()
        cardsInPlay = []
        //creating score counter underneath instructions
        if (!document.querySelector("#score")) {
            score.textContent = `Score: ${scoreCount}`
            score.setAttribute("id", "score")
            let gameBoard = document.querySelector("#game-board")
            gameBoard.before(score)
        }
    }
}

function createBoard() {
    //iterate cards array. for each card, create one img on game board
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img')
        cardElement.setAttribute("src", "images/back.png")
        cardElement.setAttribute("data-id", i)
        document.getElementById("game-board").appendChild(cardElement)
        cardElement.addEventListener("click", flipCard)
    }
}

createBoard()