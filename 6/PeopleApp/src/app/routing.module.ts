import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const appRoutes:Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'person/add', component: PersonAddFormComponent },
  { path: 'person/:name', component: PersonEditComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
