class Deck {
    constructor() {
        this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
        
    }

}
class Cards {
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}