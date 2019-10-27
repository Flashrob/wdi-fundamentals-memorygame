let cards = ["queen", "queen", "king", "king"]
let cardsInPlay = []

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard(cardId){
    cardsInPlay.push(cards[cardId])
    console.log("User flipped " + cards[cardId]);

    if (cardsInPlay.length === 2) {
        checkForMatch()
    }
}
flipCard(0)
flipCard(2)
// supposedly should call checkForMatch() within flipCard, but then it checks even with only one flipped card. So I used an if function to have 2 cards.