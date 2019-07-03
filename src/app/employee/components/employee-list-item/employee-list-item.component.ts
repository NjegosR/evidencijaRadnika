import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IEmployee } from '../../models/employee.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent {
  @Input() employees: IEmployee[];

}
