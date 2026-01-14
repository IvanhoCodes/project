import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ReportType, DamageAssessment, OverdueMaintenance, InstallationInspection, Modifications } from "../models/reports.model";

@Injectable({
  providedIn: 'root'
})

export class ReportsService {
  private apiUrl = 'https://my-json-server.typicode.com/IvanhoCodes/project/reports';

  constructor(private http: HttpClient) {}

  async getReports(): Promise<any> {
    return await firstValueFrom(this.http.get(this.apiUrl));
  }

  getDefaultReportValuesByType(type: ReportType): DamageAssessment | OverdueMaintenance | InstallationInspection | Modifications | undefined {
    let values;
    if (type === 'damage_assessment') {
      values = {
        damage_type: '',
        new_damage: false,
        urgent: false
      };
    } else if (type === 'overdue_maintenance') {
      values = {
        maintenance_type: '',
        costs: "0-500",
        urgent: false
      };
    } else if (type === 'installation_inspection') {
      values = {
        installation_type: '',
        reported_fault: '',
        test_procedure: '',
        approved: false
      };
    } else if (type === 'modifications') {
      values = {
        documented_modifications: '',
        carried_out_by: '',
        description_modification: '',
        action: '',
      };
    }

    return values;
  }
}
