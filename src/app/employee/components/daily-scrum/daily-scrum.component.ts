import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IDailyScrum } from '../../models/daily-scrum.model';
import { EmployeeService } from '../../services/employee.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDeleteModalComponent } from '../edit-delete-modal/edit-delete-modal.component';


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-daily-scrum',
  templateUrl: './daily-scrum.component.html',
  styleUrls: ['./daily-scrum.component.scss']
})
export class DailyScrumComponent implements OnInit {
  dailyScrumItems$: Observable<IDailyScrum[]>;
  closeResult: string;


  constructor(private employeeService: EmployeeService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getDailyScrumItems();
  }
  open(item, op) {
    const modalRef = this.modalService.open(EditDeleteModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.editOrDelete = op;
    modalRef.componentInstance.editedItem.subscribe((x) => {
      this.employeeService.updateDailyScrumItem(x).subscribe();
    });
    modalRef.componentInstance.deleteThisItem.subscribe((x) => {
      this.employeeService.deleteDailyScrumItem(x).subscribe();
      // this.getDailyScrumItems();
    });
  }
  getDailyScrumItems() {
    this.dailyScrumItems$ = this.employeeService.getDailyScrumList();
  }
}
