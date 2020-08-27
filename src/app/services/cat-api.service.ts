import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OwnerPet } from '../model/owner.pet';
import { timeout, catchError } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorisation: 'No Auth',
    }),
  };
  private apiUrl = `${environment.CAT_URL}` + `${environment.CAT_ENDPOINT}`;

  public getCatListing(): Observable<OwnerPet[]> {
    const url = this.apiUrl;
    // return this.http.get<any>(url,this.httpHeaders);
    return this.http.get<any>(url).pipe(
      timeout(parseInt(`${environment.RESPONSE_TIMEOUT_API}`, 10)),
      catchError((error) => {
        if (error instanceof TimeoutError) {
          console.log('timeout service. ');
          return throwError('Timeout Exception');
        }

        return throwError(error);
      })
    );
  }

  constructor(private http: HttpClient) {}
}
