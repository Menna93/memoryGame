document.addEventListener('DOMContentLoaded',()=>{
//card options
var cardArray=[
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
];
cardArray.sort(() => Math.random() - 0.5);
var grid = document.querySelector('.grid');
var resultDisplay = document.querySelector('#result');
var cardChosen =[];
var cardChosenId=[];
var cardWon=[];

// create your board
function createBoard(){
    for(let i=0; i < cardArray.length;i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('id',i);
        card.addEventListener('click',flibCard);
        grid.appendChild(card);
    }
}
//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0] === cardChosen[1])
    {
        alert('you fount a match');
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cardWon.push(cardChosen);
        console.log(cardWon);
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('sorry, try again')
    }
    cardChosen=[];
    cardChosenId=[];
    resultDisplay.textContent=cardWon.length;
    if(cardWon.length === cardArray.length/2)
    {
        alert('Congratulations,You win!')
    }
}

//flib your card
function flibCard(){
    var cardId = this.getAttribute('id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChosen.length === 2)
    {
        setTimeout(checkForMatch,500)
    }
}


createBoard();


})