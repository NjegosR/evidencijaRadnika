import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string;
  @Output() buttonPressed = new EventEmitter<string>();
  @Output() deleteEmployee = new EventEmitter<boolean>();
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

}
