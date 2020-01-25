import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styles: []
})
export class Comp3Component  {

  boxForm : FormGroup;
  constructor( private router: Router, private fb: FormBuilder ) {  
    this.boxForm = fb.group({
    });
  }

  onClicknext(type) {
      debugger;
      console.log(type);
      this.router.navigate(['/four'], {});
  }

}
