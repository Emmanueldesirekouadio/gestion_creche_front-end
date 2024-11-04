import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    // Vérification si l'utilisateur est authentifié
    if (this.userService.isAuthenticated()) {
      return true; // Autorise l'accès à la route
    }
    // Sinon, redirige vers la page de login
    this.router.navigate(['/login']);
    return false; // Bloque l'accès à la route
  }
}
