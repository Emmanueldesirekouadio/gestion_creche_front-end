import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  // Obtenir tous les utilisateurs
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Ajouter un nouvel utilisateur
  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Modifier un utilisateur
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  // Supprimer un utilisateur
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}

