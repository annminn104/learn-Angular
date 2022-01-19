import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Users } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://api.randomuser.me/';

  getUsers(pageIndex: number, pageSize: number, sortField: string | null, sortOrder: string | null, filters: Array<{ key: string; value: string[] }>): Observable<{ results: Users[] }> {
    let params = new HttpParams().append('page', `${pageIndex}`).append('results', `${pageSize}`).append('sortField', `${sortField}`).append('sortOrder', `${sortOrder}`);
    filters.forEach((filter) => {
      filter.value.forEach((value) => {
        params = params.append(filter.key, value);
      });
    });
    return this.http.get<{ results: Users[] }>(`${this.baseUrl}`, { params }).pipe(catchError(() => of({ results: [] })));
  }

  findUser() {}

  constructor(private http: HttpClient) {}
}
