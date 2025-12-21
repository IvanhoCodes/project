import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReportsService {
  private apiUrl = 'https://my-json-server.typicode.com/IvanhoCodes/project/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
