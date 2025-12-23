import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReportsService {
  private apiUrl = 'https://my-json-server.typicode.com/IvanhoCodes/project/reports';

  constructor(private http: HttpClient) {}

  async getReports(): Promise<any> {
    return await firstValueFrom(this.http.get(this.apiUrl));
  }
}
