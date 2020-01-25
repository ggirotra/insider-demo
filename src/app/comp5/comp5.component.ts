import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component {

  checkForm : FormGroup;
  constructor( private router: Router, private fb: FormBuilder ) {  
    this.checkForm = fb.group({
    });
  }

  onClicknext() {
    //  console.log(type);
      this.router.navigate(['/five'], {});
  }
  onClickPrev(){
    this.router.navigate(['/four'], {});
  }
}
