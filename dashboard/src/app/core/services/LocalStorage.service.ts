import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
})
export class LocalStorageService {
    destroy() {
        throw new Error("Method not implemented.");
    }
  getItem(arg0: string) {
    throw new Error('Method not implemented.');
  }
// accestoken est la clé
   public accesToken = "token";
   constructor() { }

   getToken(){ 
       return localStorage.getItem( this.accesToken);
      
   }


   saveToken( token: string){

        localStorage.setItem(this.accesToken, token);
    }

    destroyToken( token: string){
        localStorage.removeItem(this.accesToken );
    }
}