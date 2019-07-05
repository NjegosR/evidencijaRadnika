import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: IEmployee[], search: string): IEmployee[] {
    if (employees !== null && search !== undefined) {
      if (search === '') {
        return employees;
      } else if (search !== '') {
        const newArr = [];
        employees.filter((item) => {
          if (item.name.toLocaleLowerCase().match(search.toLocaleLowerCase())) {
            newArr.push(item);
          }
        });
        return newArr;
      }
    }
    return employees;
  }

}
