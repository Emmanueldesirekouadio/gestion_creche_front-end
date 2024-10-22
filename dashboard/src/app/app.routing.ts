import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component'; 
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { TarifComponent } from './tarif/tarif.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirigez vers 'home' par défaut
    pathMatch: 'full',
  },
  {
    path: 'home', // Chemin pour HomeComponent
    component: HomeComponent,
  },
  {
    path: 'inscription', // Chemin pour InscriptionComponent
    component: InscriptionComponent,
  },
  {
    path: 'connexion', // Chemin pour InscriptionComponent
    component: ConnexionComponent,
  },
  {
    path: 'contact', // Chemin pour InscriptionComponent
    component: ContactComponent,
  },
  {
    path: 'tarif', // Chemin pour InscriptionComponent
    component: TarifComponent,
  },
  {
    path: 'payement', // Chemin pour InscriptionComponent
    component: PaymentComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
