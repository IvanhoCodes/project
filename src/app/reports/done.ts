import { Component, effect } from '@angular/core';
import { Layout } from '../components/layout';
import { ReportsService } from '../services/reports.service';
import { Report } from '../models/reports.model';

@Component({
  selector: 'page',
  template: `
    <layout>
      Uitgevoerde rapportages
    </layout>
  `,
  imports: [ Layout ],
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
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

  public reports: Report[] = [];

  async getReports(): Promise<void> {
    this.reports = await this.reportsService.getReports();
  }
}