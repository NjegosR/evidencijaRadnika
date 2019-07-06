import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScrumAddComponent } from './daily-scrum-add.component';

describe('DailyScrumAddComponent', () => {
  let component: DailyScrumAddComponent;
  let fixture: ComponentFixture<DailyScrumAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyScrumAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyScrumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
