import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profil utilisateur',  icon:'person', class: '' },
    { path: '/table-list', title: 'Activité',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Enfant',  icon:'face', class: '' },
    { path: '/typography', title: 'Personnel',  icon:'people', class: '' },
    { path: '/icons', title: 'Parent',  icon:'family_restroom', class: '' },
    { path: '/maps', title: 'Inscription',  icon:'assignment', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Paiement',  icon:'payment', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
