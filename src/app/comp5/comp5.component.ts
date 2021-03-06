import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Comp5Component {

  checkForm : FormGroup;
  progress = 80;
  constructor( private router: Router, private fb: FormBuilder ) {  
    this.checkForm = fb.group({
    });
  }

  onClicknext() {
    //  console.log(type);
      this.router.navigate(['/six'], {});
  }
  onClickPrev(){
    this.router.navigate(['/four'], {});
  }
}
