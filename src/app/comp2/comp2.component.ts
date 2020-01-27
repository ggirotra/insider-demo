import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatInputModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  radioForm : FormGroup;
  progress = 30;

  ngOnInit() {
    //setInterval(() => this.manageProgress(), 150 )
    this.manageProgress();
  }

  constructor( private router: Router, private fb: FormBuilder ) { 
    
    this.radioForm = fb.group({
    });
  }

  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress;
    }
  }

  onClicknext() {
      this.router.navigate(['/three'], {});
  }

  onClickPrev(){
    this.router.navigate(['/one'], {});
  }

}
