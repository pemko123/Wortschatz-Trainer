import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import { AppComponent } from "../app.component";
import {Card} from "../card";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  trainForm = new FormGroup({
    solution: new FormControl('', Validators.required),
  });
  cardsArray:Array<Card>=[];
  currentCard:Card | undefined;
  word:string="";
  message:string="";
  index:number=0;
  language:boolean=false;

  constructor(
    public myapp: AppComponent,
  )
  { }

  ngOnInit(): void {
    this.language = Math.random() < 0.5;

    this.cardsArray = this.myapp.getShuffledCards();
    this.currentCard = this.cardsArray[this.index];
    if (this.currentCard) {
      (this.language) ? this.word = this.currentCard.english : this.word = this.currentCard.german;
    }
    this.index++;
  }

  onSubmit() {
    this.message = "";
    if (this.currentCard) {
      var solutionWord = "";
      (this.language) ? solutionWord = this.currentCard.german : solutionWord = this.currentCard.english;
      if (solutionWord == this.trainForm.value.solution) {
        this.nextCard();
      } else {
        this.message = "Die Korrekte Antwort wäre: " + solutionWord;
      }
    } else {
      this.message = "Bitte füge zuerst ein paar Karten hinzu";
    }
  }

  nextCard() {
    this.message = "";
    if (this.cardsArray.length == this.index) {
      this.index = 0;
    }
    this.currentCard = this.cardsArray[this.index];
    if (this.currentCard) {
      (this.language) ? this.word = this.currentCard.english : this.word = this.currentCard.german;
    }
    this.index++;
  }
}
