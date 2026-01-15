import { Component } from '@angular/core';
import { Layout } from '../components/layout';
import { MatCard, MatCardContent } from '@angular/material/card';
import { SelectedReport } from "../components/selectedReport";

@Component({
  selector: 'page',
  template: `
    <layout>
      <h2>Toegewezen rapportages</h2>
      <mat-card>
        <mat-card-content>
          <selected-report [report]="report" />
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-content>
          <selected-report [report]="report" />
        </mat-card-content>
      </mat-card>
    </layout>
  `,
  imports: [Layout, MatCard, SelectedReport, MatCardContent],
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Assigned {
  report = {
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