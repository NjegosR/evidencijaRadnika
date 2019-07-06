import * as employeeActions from '../../store/employees/employee.actions';
import { IEmployee } from '../../employee/models/employee.model';
import { IDailyScrum } from '../../employee/models/daily-scrum.model';

export interface IEmployeeState {
    employees?: IEmployee[];
    dailySrums?: IDailyScrum[];
}
export const initialState = {};
export function employeeReducer(state: IEmployeeState = initialState, action: employeeActions.Actions): IEmployeeState {
    switch (action.type) {
        case employeeActions.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload
            };
        case employeeActions.DAILY_SCRUM_ADD_SUCCESS:
            return {
                ...state,
                dailySrums: action.payload
            };
        case employeeActions.GET_DAILY_SCRUM_ITEM_SUCCESS:
            return {
                ...state,
                dailySrums: action.payload
            };
        default:
            return state;
    }
 }
