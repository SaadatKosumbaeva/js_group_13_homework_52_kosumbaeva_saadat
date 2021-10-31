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
  cardDeck;

  constructor() {
    this.cardDeck = new CardDeck();
    this.cardsArray = this.cardDeck.getCards(2);
    console.log(this.cardDeck);
    console.log(this.cardsArray);
  }
}
