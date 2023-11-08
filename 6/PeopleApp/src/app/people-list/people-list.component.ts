import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people
  query: string
  constructor(){
    this.query = ''
    this.people = [
      {
        name: 'john',
        instructor: false,
        added_on: new Date().getTime()
      },
      {
        name: 'bobby',
        instructor: false,
        added_on: new Date().getTime()
      },
      {
        name: 'jenny',
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: 'jane',
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: 'steve',
        instructor: true,
        added_on: new Date().getTime()
      }
    ]
  }

  onPersonDelete(evt:any) {
    let delete_person = evt['delete_person'] 
    this.people = this.people.filter((p) => p.name != delete_person)
  }
}
