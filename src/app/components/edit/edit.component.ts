import { Component, OnInit, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  modalRef: BsModalRef;
  form: FormGroup;

  @Input() user: UserModel;
  @Output() editEmitted = new EventEmitter();
  

  constructor(private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.form = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      lastname: new FormControl(this.user.lastname, Validators.required),
      age: new FormControl(this.user.age, Validators.required)
    });
  }

  onSubmit() {
    if(this.form.valid){
      this.editEmitted.emit(this.form.value);
      this.modalRef.hide();
      this.toastr.success('Usuario modificado con éxito', 'Modificado');
      this.form.reset();
    }
  }

  


}
