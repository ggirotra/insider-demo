import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  radioForm : FormGroup;
  constructor( private router: Router, private fb: FormBuilder ) { 
    
    this.radioForm = fb.group({
    });
  }

  onClicknext() {
      this.router.navigate(['/one'], {});
  }

  onClickPrev(){
    this.router.navigate(['/about'], {});
  }

}
