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
export class Comp2Component {
  radioForm : FormGroup;

  constructor( private router: Router, private fb: FormBuilder ) { 
    
    this.radioForm = fb.group({
    });
  }

  onClicknext() {
      this.router.navigate(['/three'], {});
  }

  onClickPrev(){
    this.router.navigate(['/one'], {});
  }

}
