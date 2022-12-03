import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ThoughtsListComponent
  },
  {
    path: 'deleteThought/:id',
    component: DeleteThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
