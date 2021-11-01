import {Component} from '@angular/core';
import {Card, CardDeck} from "./lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'homework52-app';
  cardsArray: Card[] = [];
  gameStatus: string = '';
  points: number = 0;
  disabled = false;
  cardDeck;

  constructor() {
    this.cardDeck = new CardDeck();
    this.cardsArray = this.cardDeck.getCards(2);
    this.countPoints();
  }

  countPoints() {
    this.points = 0;
    for (let i = 0; i < this.cardsArray.length; i++) {
      this.points += this.cardsArray[i].getScore();
    }
    if (this.points === 21) {
      this.gameStatus = 'You win!';
      this.disabled = true;
    } else if (this.points > 21) {
      this.gameStatus = 'You lose!';
      this.disabled = true;
    }
  }

  giveAnotherCard() {
    let oneMoreCard = this.cardDeck.getCards(1);
    this.cardsArray.concat(oneMoreCard);
    this.countPoints();
  }

  reset() {
    this.disabled = false;
    this.gameStatus = '';
    this.cardDeck = new CardDeck();
    this.cardsArray = this.cardDeck.getCards(2);
    this.countPoints();
  }
}
