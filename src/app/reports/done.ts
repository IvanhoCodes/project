import { Component, effect } from '@angular/core';
import { Layout } from '../components/layout';
import { ReportsService } from '../services/reports.service';
import { ReportMain } from '../models/reports.model';
import { ReportsList } from "../components/reportsList";

@Component({
  selector: 'page',
  template: `
    <layout>
      <h1>Uitgevoerde rapportages</h1>
      @defer {
        <reports-list [reports]="reports" />
      } @loading (minimum 1s) {
        <div role="status" aria-live="polite" aria-atomic="true">
          <p>Rapportages laden...</p>
        </div>
      } @placeholder {
        <div role="status" aria-live="polite" aria-atomic="true">
          <p>Rapportages laden...</p>
        </div>
      } @error {
        <div role="alert" aria-live="assertive">
          <p>Fout bij het laden van rapportages. Probeer het opnieuw.</p>
        </div>
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
    try {
      this.reports = await this.reportsService.getReports();
    } catch (error) {
      console.error('Failed to load reports:', error);
      // Error will be shown via @error block
    }
  }
}