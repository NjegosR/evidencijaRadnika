import * as employeeActions from '../store/employee.actions';
import { IEmployee } from '../employee/models/employee.model';
import { IDailyScrum } from '../employee/models/daily-scrum.model';

export interface IEmployeeState {
    employees?: IEmployee[];
    dailySrums?: IDailyScrum[];
}
export const initialState = {};
export function employeeReducer(state: IEmployeeState = initialState, action: employeeActions.Actions): IEmployeeState {
    switch (action.type) {
        default:
            return state;
    }
 }
