export class Card {
  rank;
  suit;

  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }

  getScore() {
    switch (this.rank) {
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      case 'A':
        return 11;
      default:
        return parseInt(this.rank);
    }
  }
}

export class CardDeck {
  cardDeck: Card[] = [];
  getCardsArray: Card[] = [];

  RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  SUITS = ['diams', 'hearts', 'clubs', 'spades'];

  constructor() {
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        this.cardDeck.push(new Card(this.RANKS[i], this.SUITS[j]));
      }
    }
  }

  getCard(): Card {
    const cardIndex = Math.floor(Math.random() * this.cardDeck.length);
    const generatedCard = this.cardDeck[cardIndex];
    this.cardDeck.splice(cardIndex, 1);
    return generatedCard;
  }

  getCards(howMany: number): Card[] {
    for (let i = 0; i < howMany; i++) {
      const currentCard = this.getCard();
      this.getCardsArray.push(currentCard);
    }
    return this.getCardsArray;
  }
}
