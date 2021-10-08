import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { ExternalComponent } from './external/external.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/responses', pathMatch: 'full' },
  { path: 'responses', component: QuestionsComponent },
  { path: 'external-data', component: ExternalComponent },
  {
    path: 'external-data',
    component: ExternalComponent,
    runGuardsAndResolvers: 'paramsChange'
  },
  // {
  //   path: 'external-data',
  //   component: ExternalComponent,
  //   runGuardsAndResolvers: 'paramsChange',
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'external-data',
  //   component: ExternalComponent,
  //   children: [{
  //     path: '404',
  //     component: NotfoundComponent
  //   }]
  // },
  { path: '**', pathMatch: 'full', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
