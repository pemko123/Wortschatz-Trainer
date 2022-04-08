import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { Card } from "../card";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardsArray:Array<Card>=[];
  editMode:number=-1;

  constructor(private formBuilder: FormBuilder,
              public myapp: AppComponent) {
  }

  editCardForm = new FormGroup({
    index: new FormControl(''),
    english: new FormControl(''),
    german: new FormControl(''),
  });

  onSubmit(): void {
    this.editMode = -1
    this.myapp.editCard(this.editCardForm.value.index, new Card(this.editCardForm.value.german, this.editCardForm.value.english))
    this.editCardForm.reset();
  }

  deleteCard(cardNumber:number): void {
    this.myapp.deleteCard(cardNumber)
  }

  editCard(cardNumber:number) {
    this.editCardForm.patchValue({
      index: cardNumber,
      german: this.cardsArray[cardNumber].german,
      english: this.cardsArray[cardNumber].english,
    });
    this.editMode = cardNumber;
  }

  ngOnInit(): void {
      this.cardsArray = this.myapp.getCards();
  }
}

