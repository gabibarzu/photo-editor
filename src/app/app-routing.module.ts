import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './modules/homepage/homepage.component';
import { EditorComponent } from './modules/editor/editor.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "editor", component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
