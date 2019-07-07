import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDeleteModalComponent } from '../edit-delete-modal/edit-delete-modal.component';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string;
  @Input() id: number;
  @Output() buttonPressed = new EventEmitter<string>();
  @Output() deleteEmployee = new EventEmitter<any>();

  @ViewChild('editt', {static: false}) editt: ElementRef;

  constructor(private modalService: NgbModal) { }

  clickBtn() {
    this.buttonPressed.emit(this.editt.nativeElement.innerHTML);
    this.editt.nativeElement.innerHTML = (this.editt.nativeElement.innerHTML === 'Snimi') ? 'Izmjeni' : 'Snimi';
  }
  open() {
    const modalRef = this.modalService.open(EditDeleteModalComponent);
    modalRef.componentInstance.deleteEmployee = 'true';
    modalRef.componentInstance.employeeId = this.id;
    modalRef.componentInstance.deleteEmployeeConfirmation.subscribe((x) => {
      this.deleteEmployee.next(x);
      modalRef.close();
    });
  }
}
