import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { LocalStorageService } from "../services/LocalStorage.service";

 export class jwtInterceptor implements HttpInterceptor {
     router: any;
     constructor(private localStorage:LocalStorageService) {}
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = this.localStorage.getToken();
        let authReq : any;

        if (token) {
            authReq = req.clone({
             setHeaders: { Authorization: `Bearer ${JSON.stringify(token)}` }
            });
    
        }

        return next.handle(authReq).pipe(
            catchError((err: HttpErrorResponse) => {
              if(err.status === 401 || err.status === 403 || (err.status === 400 && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")){
                this.localStorage.destroy();
                this.router.navigate(["/login"]);
              }
              return throwError(() => new Error(err.error.message || err.message))
            })
          )
     }

    }
