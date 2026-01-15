import { Component, effect } from '@angular/core';
import { Layout } from '../components/layout';
import { ReportsService } from '../services/reports.service';
import { ReportMain } from '../models/reports.model';
import { ReportsList } from "../components/reportsList";

@Component({
  selector: 'page',
  template: `
    <layout>
      <h2>Uitgevoerde rapportages</h2>
      @defer {
        <reports-list [reports]="reports" />
      } @loading (minimum 1s) {
        Rapportages laden...
      } @placeholder {
        Rapportages laden...
      }
    </layout>
  `,
  imports: [Layout, ReportsList],
  styles: `
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Done {
  constructor(private reportsService: ReportsService) {
    effect(() => {
      this.getReports();
    });
  }

  public reports: ReportMain[] = [];

  async getReports(): Promise<void> {
    this.reports = await this.reportsService.getReports();
  }
}