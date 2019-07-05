import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('editt', {static: false}) editt: ElementRef;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  clickBtn() {
    this.buttonPressed.emit(this.editt.nativeElement.innerHTML);
    this.editt.nativeElement.innerHTML = (this.editt.nativeElement.innerHTML === 'Snimi') ? 'Izmjeni' : 'Snimi';
  }
}
