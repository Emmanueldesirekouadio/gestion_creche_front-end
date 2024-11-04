import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
    path: 'home', 
    component: HomeComponent,
  },
  {
    path: 'inscription', 
    component: InscriptionComponent,
  },
  {
    path: 'connexion', 
    component: ConnexionComponent,
  },
  {
    path: 'contact', 
    component: ContactComponent,
  },
  {
    path: 'tarif', 
    component: TarifComponent,
  },
  {
    path: 'payement', 
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
      useHash: false
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
