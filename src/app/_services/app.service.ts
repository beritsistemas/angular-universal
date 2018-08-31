import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { TransferState } from '@angular/platform-browser';
import { makeStateKey } from '@angular/platform-browser';
import { environment } from '../../environments/environment';


var apiUrl = "/api";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const APP_STATE_KEY = makeStateKey('app-state');


const url = `${environment.endpoint}${apiUrl}/test`;//${id}  ${this.origin}
    
console.log(url);

@Injectable({
  providedIn: 'root'
})
export class AppService {

    
 
  constructor(private http: HttpClient
    , @Optional() @Inject(APP_BASE_HREF) public origin: string
    ,private state: TransferState
  ) { }

  data:any;

  


  private extractData(res: Response) {
    let body = res;
    console.log(res);
    return body || { };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error&&error.error.message) {//)
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };


  //

  getState(): Observable<any> {
    this.data = this.state.get(APP_STATE_KEY, null as any);
    if(this.data){
        return new Observable((observer) => {
      
          // observable execution
          observer.next( this.data )
          observer.complete()
      })
    }
    
    
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      tap(data=>this.state.set(APP_STATE_KEY,data)),
      catchError(this.handleError));
  }

}
