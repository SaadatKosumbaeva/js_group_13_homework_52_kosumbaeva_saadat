import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank: string = '';
  @Input() suit: string = '';

  getClassName() {
    return `card rank-${this.rank.toLowerCase()} ${this.suit}`;
  }

  suitGenerator() {
    switch (this.suit) {
      case 'diams': return '♦';
      case 'hearts': return '♥';
      case 'clubs': return '♣';
      default: return '♠';
    }
  }
}
