import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() user: UserModel;
  @Output() delete = new EventEmitter();
  

  constructor(private modalService: BsModalService, private toast: ToastrService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit();
    this.modalRef.hide();
    this.toast.toastrConfig.timeOut = 1000;
    this.toast.success('Un usuario se ha eliminado', 'Eliminado');
  }

  
  
}
