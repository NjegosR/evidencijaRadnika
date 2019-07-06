import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule } from '@angular/common/http';
import { EditDeleteModalComponent } from './employee/components/edit-delete-modal/edit-delete-modal.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employees/employee.effects';
import { employeeReducer } from './store/employees/employee.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    HttpClientModule,
    StoreModule.forRoot({
      employee: employeeReducer
    }),
    StoreDevtoolsModule.instrument({name: 'Evidencija radnika'}),
    EffectsModule.forRoot([
      EmployeeEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditDeleteModalComponent
  ]
})
export class AppModule { }
