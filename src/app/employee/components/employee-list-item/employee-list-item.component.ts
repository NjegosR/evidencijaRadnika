import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../../models/employee.model';
import { IButton } from '../../models/button.clicked';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent {
  @Input() employees: IEmployee[];
  @Output() btnClicked = new EventEmitter<IButton>();
  @Output() deleteEmpl = new EventEmitter<boolean>();
  buttonClicked(Type, Id) {
    const btn = {
      id: Id,
      type: Type
    };
    this.btnClicked.next(btn);
  }
}
