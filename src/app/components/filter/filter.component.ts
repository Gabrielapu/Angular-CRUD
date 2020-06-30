import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  formEdad: FormGroup
  @Output() edadEmitted = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    this.formEdad = new FormGroup({
    edad1: new FormControl('', Validators.required),
    edad2: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(this.formEdad.valid){
      console.log(this.formEdad.value);
      this.edadEmitted.emit(this.formEdad.value)
      this.formEdad.reset();

    }
  }
}
