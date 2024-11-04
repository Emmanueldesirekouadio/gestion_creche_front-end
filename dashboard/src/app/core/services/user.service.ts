import { Injectable } from '@angular/core';

import { LocalStorageService } from './LocalStorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll(arg0: string) {
    throw new Error('Method not implemented.');
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }

  constructor(private localStorageService: LocalStorageService) {}

  isAuthenticated(){
    const token = this.localStorageService.getToken();
    if(token){
      return true;
    }
    return false;
  }
  

  }

