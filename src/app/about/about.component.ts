import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('myForm', {static:false} ) public MyForm:NgForm;
  //@ViewChild('yesValue', {static:false} ) yesValue : MatRadioButton;

  formData = {
    startRadio: ""
  }
  isSubmitted: boolean = false;
  
  constructor( private router: Router, private fb: FormBuilder ) { }

  ngOnInit() {
  }

  getSelection(){
    var selectedVal = this.formData.startRadio;
    return selectedVal;
  }

  // focusOnForm() {
  //   this.yesValue.focus();
  // }

  onClicknext(e) {
    var action = this.getSelection();
    
    if (this.MyForm.valid) {
      if (action === "yes"){
        this.router.navigate(['/one'], {});
      } else {
        this.router.navigate(['/six'], {});
      }
    } else {
      this.isSubmitted = true;
    }

  }

  onClickPrev(){
    this.router.navigate(['/about'], {});
  }

}
