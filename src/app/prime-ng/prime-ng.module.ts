import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports:[
    PanelModule,
    ButtonModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    SidebarModule,
    TagModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
