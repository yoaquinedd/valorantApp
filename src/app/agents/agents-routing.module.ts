import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AgentPageComponent } from './pages/agent-page/agent-page.component';
import { EquipmentPageComponent } from './pages/equipment-page/equipment-page.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'list',
        component:ListPageComponent
      },
      {
        path:'equipment',
        component:EquipmentPageComponent
      },
      {
        path:'maps',
        component:MapsPageComponent 
      },
      {
        path:':id',
        component:AgentPageComponent
      },
      {
        path:'**',
        redirectTo:'list'
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
