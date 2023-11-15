import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPeople'
})
export class CountPeoplePipe implements PipeTransform {

  transform(people: any[]): number {
    return people.length;
  }

}
