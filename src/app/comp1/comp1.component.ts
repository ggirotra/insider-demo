import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
  contactForm : FormGroup;
  constructor( private router: Router, private fb: FormBuilder ) { 
    
    this.contactForm = fb.group({
      firstName : '',
      lastName : '',
      email : '',
      company: '',
    });
  }

  title = 'poc1';

  onClicknext(type) {
      console.log(type);
      this.router.navigate(['/two'], {});
  }

  onClickPrev(){
    this.router.navigate(['/four'], {});
  }

}
