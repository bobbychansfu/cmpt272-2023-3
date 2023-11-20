import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent {
  // activedRoute: ActivatedRoute
  personsName: string
  constructor(private activeedRoute: ActivatedRoute) {
    this.personsName = activeedRoute.snapshot.params['name']
  }
}
