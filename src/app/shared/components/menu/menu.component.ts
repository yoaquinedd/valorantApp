import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {


  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Agentes',
        icon: 'pi pi-fw pi-user',
        routerLink: 'list'
      },
      {
        label: 'Equipamiento',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'equipment'
      },
      {
        label: 'Mapas',
        icon: 'pi pi-fw pi-map',
        routerLink: 'maps'
      },
    ];
  }
}
