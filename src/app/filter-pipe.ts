import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], filterString: string, property: string): User[] {
    console.log('pipe run');
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: User[] = [];
    for (let user of value) {
      if (user[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}
