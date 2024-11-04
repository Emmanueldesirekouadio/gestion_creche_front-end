import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/users/';  // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) { }

  // Récupérer tous les utilisateurs
  getUsers(): Observable<any[]> {
    console.log("Requête envoyée à l'API");
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
