import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-mapeo',
  templateUrl: './mapeo.component.html',
  styleUrls: ['./mapeo.component.css']
})
export class MapeoComponent implements OnInit {
  
  users: UserModel[];
  formBuscar: FormGroup
  @Output() valorEmitted = new EventEmitter;
  @Input() valoresMapeados: any[];

  constructor() { }

  ngOnInit(): void {
    this.formBuscar = new FormGroup({
      buscado: new FormControl('', Validators.required)
      });
  }
  
  onSubmit() {
    if(this.formBuscar.valid){
      this.valorEmitted.emit(this.formBuscar.value)
      this.formBuscar.reset();
    }
  }
}
