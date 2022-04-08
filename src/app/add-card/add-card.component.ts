import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppComponent } from "../app.component";
import {Card} from "../card";
import {exampleCards} from "../exampleCards";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {
  cardForm = new FormGroup({
    english: new FormControl('', Validators.required),
    german: new FormControl('', Validators.required),
  });

  constructor(public myapp: AppComponent){}

  onSubmit() {
    this.myapp.addCard(new Card(this.cardForm.value.german, this.cardForm.value.english));
  }

  addExampleCard() {
    let cards = Array.from(exampleCards);
    let card = cards[Math.floor(Math.random() * cards.length)];

    this.myapp.addCard(new Card(card.german, card.english));
  }

}
