// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//p what is being passed in is a number and a card suit symbol
//r we want the name of the suit to be returned
//e defineSuit(♣) would return "club"
//p I used the substring method to take the last character from whats being passed in and stored it in x
// I then used a switch statement and passed x in and used the suits as cases and returned the corresponding suit.

function defineSuit(card){
    let x = card.substr(-1);
    switch(x){
            case "♣": return "clubs";
            case "♦": return "diamonds";
            case "♥": return "hearts";
            default: return "spades";
    }
}