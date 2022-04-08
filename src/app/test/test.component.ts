import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Card} from "../card";
import {TestInProgressService} from "../test-in-progress.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  trainForm = new FormGroup({
    solution: new FormControl('', Validators.required),
  });
  cardsArray:Array<Card>=[];
  currentCard:Card | undefined;
  word:string="";
  message:string="";
  index:number=0;
  language:boolean=false;
  wrongAnswers:number=0;
  rightAnswers:number=0;

  constructor(public myapp: AppComponent,
              private testInProgressService: TestInProgressService ) { }

  ngOnInit(): void {
    this.cardsArray = this.myapp.getShuffledCards();
    if (this.cardsArray.length > 0) {
      this.testInProgressService.setIsTestInProgress(true);
    } else {
      this.message = "Bitte füge zuerst ein paar Karten hinzu";
    }

    this.language = Math.random() < 0.5;
    this.currentCard = this.cardsArray[this.index];
    if (this.currentCard) {
      (this.language) ? this.word = this.currentCard.english : this.word = this.currentCard.german;
    }
    this.index++;
  }

  onSubmit() {
    if (this.currentCard) {
      var solutionWord = "";
      (this.language) ? solutionWord = this.currentCard.german : solutionWord = this.currentCard.english;
      if (solutionWord == this.trainForm.value.solution) {
        this.rightAnswers++;
      } else {
        this.wrongAnswers++;
      }
      this.nextCard();
    }
  }

  nextCard() {
    if (this.cardsArray.length == this.index) {
      this.testInProgressService.setIsTestInProgress(false);
      this.message="Du hast den Test beendet. " + this.rightAnswers + " Antworten waren korrekt und " + this.wrongAnswers + " Antworten waren falsch";
    }
    this.currentCard = this.cardsArray[this.index];
    if (this.currentCard) {
      (this.language) ? this.word = this.currentCard.english : this.word = this.currentCard.german;
    }
    this.index++;
  }

}
