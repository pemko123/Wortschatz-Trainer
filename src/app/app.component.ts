import { Component } from '@angular/core';
import {Card} from "./card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wortschatz';

  cardsArray:Array<Card>=[];

  addCard(item:Card){
    this.cardsArray.push(item);
    this.sortCards();
  }

  deleteCard(cardNumber:number) {
    this.cardsArray.splice(cardNumber, 1);
  }

  editCard(cardNumber:number, item:Card) {
    this.deleteCard(cardNumber);
    this.addCard(item);
  }

  resetAllCards() {
    this.cardsArray.length = 0;
  }

  sortCards() {
    this.cardsArray = this.cardsArray.sort((a,b) => a.german.localeCompare(b.german));
  }

  getCards() {
    return this.cardsArray;
  }

  // -> Fisher–Yates shuffle algorithm
  getShuffledCards() {
    var array = this.cardsArray;
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

}
