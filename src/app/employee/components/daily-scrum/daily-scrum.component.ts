import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IDailyScrum } from '../../models/daily-scrum.model';
import { EmployeeService } from '../../services/employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDeleteModalComponent } from '../edit-delete-modal/edit-delete-modal.component';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import * as employeeActions from '../../../store/employees/employee.actions';
import { pluck } from 'rxjs/operators';


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
              private modalService: NgbModal,
              private store: Store<IAppState>
              ) { }

  ngOnInit() {
    this.store.dispatch({
      type: employeeActions.GET_DAILY_SCRUM_ITEM
    });
    this.dailyScrumItems$ = this.store.pipe(select('employee'), pluck('dailySrums'));
  }
  open(item, op) {
    const modalRef = this.modalService.open(EditDeleteModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.editOrDelete = op;
    modalRef.componentInstance.editedItem.subscribe((x) => {
      // this.employeeService.updateDailyScrumItem(x).subscribe();
      this.store.dispatch({
        type: employeeActions.EDIT_DAILY_SCRUM_ITEM,
        payload: {
          body: x
        }
      });
    });
    modalRef.componentInstance.deleteThisItem.subscribe((x) => {
      this.store.dispatch({
        type: employeeActions.DELETE_DAILY_SCRUM_ITEM,
        payload: {
          id: x
        }
      });
    });
  }
}
