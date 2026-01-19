import { Component, effect } from '@angular/core';
import { Layout } from '../components/layout';
import { MatCard, MatCardContent } from '@angular/material/card';
import { SelectedReport } from "../components/selectedReport";
import { ReportsService } from '../services/reports.service';
import { Report } from '../models/reports.model';

@Component({
  selector: 'page',
  template: `
    <layout>
      <h1>Toegewezen rapportage</h1>
      @defer {
        <mat-card aria-label="Rapportagedetails">
          <mat-card-content>
            <selected-report [report]="report" />
          </mat-card-content>
        </mat-card>
      } @loading (minimum 1s) {
        <div role="status" aria-live="polite" aria-atomic="true">
          <p>Rapportage laden...</p>
        </div>
      } @placeholder {
        <div role="status" aria-live="polite" aria-atomic="true">
          <p>Rapportage laden...</p>
        </div>
      } @error {
        <div role="alert" aria-live="assertive">
          <p>Fout bij het laden van rapportage. Probeer het opnieuw.</p>
        </div>
      }
    </layout>
  `,
  imports: [Layout, MatCard, SelectedReport, MatCardContent],
  styles: `
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Assigned {
  report: Report = {
    id: 6, // Mock id
    name: '',
    date: new Date(),
    location: '',
    description: '',
    type: 'damage_assessment',
    values: {
      damage_type: '',
      new_damage: false,
      urgent: false
    }
  }
}