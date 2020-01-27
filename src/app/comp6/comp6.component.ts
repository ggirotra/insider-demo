import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {
  progress = 100;

  constructor() { }

  ngOnInit() {
    this.manageProgress();
  }

  manageProgress() {
    if(this.progress === 100) {
      this.progress = 100;
    } else {
      this.progress = this.progress;
    }
  }

}
