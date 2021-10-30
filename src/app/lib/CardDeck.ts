export class Card {
  rank: string;
  suit: string;
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

export class CardDeck{
  cards: Card[] = [];
  constructor() {
    const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const SUITS = ['diams', 'hearts', 'clubs', 'spades'];

    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 3; j++) {
        this.cards.push(new Card(RANKS[i], SUITS[j]))
      }
    }
  }

  getCard(): Card {
    const cardIndex = Math.floor(Math.random() * 51);
    this.cards.splice(cardIndex, 1);
    return this.cards[cardIndex];
  }

  getCards(howMany: number): Card[] {
    const cardsArray: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const item = this.getCard();
      cardsArray.push(item);
    }
    return cardsArray;
  }
}
