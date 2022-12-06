let cards = document.getElementById('card-items');
let reqCards = cards.children;
let reqCardsArr = Object.values(reqCards);

window.onload = function() {
  shuffleCards();
};

function shuffleCards() {
    let i=0;
    let randomIndex;
    let temp;

    while(i < reqCardsArr.length) {
        randomIndex = Math.floor(i * Math.random());
        temp = reqCardsArr[randomIndex]
        reqCardsArr[randomIndex] = reqCardsArr[i]
        reqCardsArr[i] = temp
        cards.appendChild(reqCardsArr[i])
        i++;
    }
}

function sort() {
    let i=0;
    let getCardsByTag;
    let swapCard = true;
    let flag;

    do {
        swapCard = false;
        getCardsByTag = cards.getElementsByTagName("div");
        for (i = 0; i < (getCardsByTag.length - 1); i++) {                        
            flag = false;
            if (getCardsByTag[i].innerHTML.toLowerCase() > getCardsByTag[i + 1].innerHTML.toLowerCase()) {
                flag = true;
                break;
            }
        }
        if (flag) {
            getCardsByTag[i].parentNode.insertBefore(getCardsByTag[i + 1], getCardsByTag[i]);
            swapCard = true;
        }
    } while (swapCard)
}
