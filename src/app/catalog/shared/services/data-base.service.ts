import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DataBaseService {

  databaseUrl: string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) {}

  // GET
  getDatas(value: string): Observable<any> {
    const url = this.databaseUrl + value;
    return this.http.get(url);
  }

}