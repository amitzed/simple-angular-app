import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { ExternalComponent } from './external/external.component';

const routes: Routes = [
  { path: '', redirectTo: '/responses', pathMatch: 'full' },
  { path: 'responses', component: QuestionsComponent },
  { path: 'external-data', component: ExternalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
