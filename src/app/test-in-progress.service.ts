import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestInProgressService {
  testInProgress:boolean = false;

  constructor() { }

  isTestInProgress() {
    return this.testInProgress;
  }

  setIsTestInProgress(testInProgress:boolean) {
    this.testInProgress = testInProgress;
  }
}
