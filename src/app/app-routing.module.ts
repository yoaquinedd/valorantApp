import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule)
  },
  {
    path:'404',
    component: Error404PageComponent
  },
  {
    path:'',
    redirectTo: 'agents',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
