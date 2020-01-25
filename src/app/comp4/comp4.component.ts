import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component  {
  textForm : FormGroup;
  constructor( private router: Router, private fb: FormBuilder ) {  
    this.textForm = fb.group({
    });
  }

  onClicknext() {
      this.router.navigate(['/five'], {});
  }

}
