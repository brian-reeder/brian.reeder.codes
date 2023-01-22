import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogTemplateComponent } from './blog-template/blog-template.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':slug', component: BlogTemplateComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
