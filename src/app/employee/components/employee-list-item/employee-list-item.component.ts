import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('input', {static: false}) input: HTMLElement;

  editTable = false;
  rowId: number;
  value: string;
  color = 'red';
  constructor(private renderer: Renderer2) { }
  buttonClicked(Type, Id, name) {
    this.rowId = Id;
    const btn = {
      id: Id,
      type: Type,
      employee: name
    };
    this.btnClicked.next(btn);
    if (Type === 'Izmjeni') {
      this.editTable = true;
    } else {
      this.editTable = false;
    }
  }
  test(e) {
    alert();
    alert(e);
  }
}
