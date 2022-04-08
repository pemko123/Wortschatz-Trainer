import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { CardListComponent } from './card-list/card-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddCardComponent } from './add-card/add-card.component';
import { TrainingComponent } from './training/training.component';
import { TestComponent } from './test/test.component';
import {TestInProgressService} from "./test-in-progress.service";

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    TopBarComponent,
    AddCardComponent,
    TrainingComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: CardListComponent},
      {path: 'training', component: TrainingComponent},
      {path: 'test', component: TestComponent},
    ]),
    ReactiveFormsModule,
  ],
  providers: [TestInProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
