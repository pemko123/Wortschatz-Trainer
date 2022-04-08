import { Component, OnInit } from '@angular/core';
import { TestInProgressService } from "../test-in-progress.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private testInProgressService: TestInProgressService) { }

  ngOnInit(): void {
  }

  isTestInProgress() {
    return this.testInProgressService.isTestInProgress();
  }

}
