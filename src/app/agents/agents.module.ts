import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AgentPageComponent } from './pages/agent-page/agent-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { EquipmentPageComponent } from './pages/equipment-page/equipment-page.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';




@NgModule({
    declarations: [
        LayoutPageComponent,
        ListPageComponent,
        AgentPageComponent,
        CardComponent,
        EquipmentPageComponent,
        MapsPageComponent
    ],
    imports: [
        CommonModule,
        AgentsRoutingModule,
        PrimeNgModule,
        SharedModule,

    ]
})
export class AgentsModule { }
