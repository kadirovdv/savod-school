import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createContact(data: Array<{}>): Observable<any> {
    return this.http.post<Observable<Array<{}>>>('/api/v4/contacts', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  createLead(data: Array<{}>): Observable<any> {
    return this.http.post<Observable<Array<{}>>>('/api/v4/leads', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
