import { Component } from '@angular/core';
import { Layout } from '../components/layout';
import { ReportsService } from './reports.service';
import { Report } from './reports.model';

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
  constructor(private reportsService: ReportsService) {}

  public reports: Report[] = [];
  ngOnInit() {
    this.reportsService.getReports().subscribe(data => {
      this.reports = data;
    });
  }
}