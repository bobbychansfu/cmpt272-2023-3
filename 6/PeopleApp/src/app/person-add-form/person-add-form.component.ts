import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent {
  form: FormGroup
  constructor(private ps: PeopleService, private router: Router){
    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
        
      ]),
      instructor: new FormControl(),
      age: new FormControl()
    }
    this.form = new FormGroup(formControls)
  }

  onSubmit(newPerson:any) {
    //console.log(newPerson)
    this.ps.add(newPerson)
    this.router.navigate(["/people"])
  }
}
