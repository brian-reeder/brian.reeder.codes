import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { NotesTemplateComponent } from './notes-template/notes-template.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: ':slug', component: NotesTemplateComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
