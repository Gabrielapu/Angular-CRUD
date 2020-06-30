import { Component, OnInit, TemplateRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  modalRef: BsModalRef;
  form: FormGroup;

  @Output() userEmitted = new EventEmitter();

  constructor(private modalService: BsModalService, private renderer: Renderer2, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if(this.form.valid){
      this.userEmitted.emit(this.form.value);
      this.modalRef.hide();
      this.toastr.success('Usuario agregado con éxito', 'Agregado');
      this.form.reset();
    }
  }

  onReset() {
    this.renderer.selectRootElement('#name-input').focus();
  }

}
