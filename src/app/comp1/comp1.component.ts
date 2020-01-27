import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit  {
  @ViewChild('myForm',{static:false}) public MyForm: NgForm;
  @ViewChild('fname', {static:false} ) fname : MatInput;
  isSubmitted: boolean;
  progress = 10;

  constructor( private router: Router ) { 
  }

  contactFormData = {
    firstName : '',
    lastName : '',
    email : '',
    company: '',
  };

  ngOnInit(){
    this.manageProgress();
  }

  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress;
    }
  }

  onClicknext(e) {
    console.log(this.MyForm.valid);
    if (!this.MyForm.valid) {
      this.isSubmitted = true;
    } else {
      this.router.navigate(['/two'], {});
    }
}

  onClickPrev(){
    this.router.navigate(['/about'], {});
  }

}
