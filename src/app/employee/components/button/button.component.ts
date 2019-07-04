import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string;
  @Output() buttonPressed = new EventEmitter<string>();

}
