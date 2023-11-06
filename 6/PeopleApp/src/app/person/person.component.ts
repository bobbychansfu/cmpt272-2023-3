import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person:any
  @Output() delete = new EventEmitter()

  constructor(){
    // this.person = {
    //   name: 'bobby',
    //   instructor: true,
    //   added_on: new Date().getTime()
    // }
  }
  onDelete(evt:any,per_to_be_deleted:string) {
    evt['delete_person'] = per_to_be_deleted
    //console.log(evt)
    // send it to the parent component
    this.delete.emit(evt)
  }
}
