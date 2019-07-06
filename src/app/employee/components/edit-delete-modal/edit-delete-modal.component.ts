import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDailyScrum } from '../../models/daily-scrum.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-delete-modal',
  templateUrl: './edit-delete-modal.component.html',
  styleUrls: ['./edit-delete-modal.component.scss']
})
export class EditDeleteModalComponent {
  @Input() item: IDailyScrum;
  @Input() editOrDelete: string;
  @Output() editedItem = new EventEmitter<IDailyScrum>();
  @Output() deleteThisItem = new EventEmitter<number>();

  constructor(public activeModal: NgbActiveModal) { }
  submit(Id, op) {
    if (op === 'edit') {
      const val = {
        id: Id,
        name: this.item.name,
        time: this.item.time,
        onTime: this.item.onTime
      };
      this.editedItem.emit(val);
    } else {
      this.deleteThisItem.emit(Id);
    }
    this.activeModal.close();
  }
}
