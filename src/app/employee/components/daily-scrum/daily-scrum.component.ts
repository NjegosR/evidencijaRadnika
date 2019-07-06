import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-daily-scrum',
  templateUrl: './daily-scrum.component.html',
  styleUrls: ['./daily-scrum.component.scss']
})
export class DailyScrumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
