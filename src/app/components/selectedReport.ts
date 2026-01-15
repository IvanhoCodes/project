import { Component, effect, input, signal } from "@angular/core";
import { MatRadioGroup, MatRadioButton } from "@angular/material/radio";
import { InputList } from "./inputList";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { Report, ReportType } from "../models/reports.model";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReportsService } from "../services/reports.service";

@Component({
    selector: "selected-report",
    template: `
        <mat-form-field>
            <mat-label>Naam rapportage</mat-label>
            <input matInput type="text" [value]="report().name" />
        </mat-form-field>
        <mat-form-field>
            <mat-label>Datum rapportage</mat-label>
            <input matInput type="datetime-local" [value]="report().date" />
        </mat-form-field>
        <mat-form-field>
            <mat-label>Locatie rapportage</mat-label>
            <input matInput type="text" [value]="report().location" />
        </mat-form-field>
        <mat-form-field>
            <mat-label>Opmerking</mat-label>
            <textarea matInput [value]="report().description"></textarea>
        </mat-form-field>
        <mat-radio-group [value]="report().type" (change)="setSelectedType($event.value)">
            <mat-radio-button value="damage_assessment">
                Schade opnemen
            </mat-radio-button>
            <mat-radio-button value="overdue_maintenance">
                Achterstallig onderhoud opnemen
            </mat-radio-button>
            <mat-radio-button value="installation_inspection">
                Technische installaties inspecteren
            </mat-radio-button>
            <mat-radio-button value="modifications">
                Modificaties inventariseren
            </mat-radio-button>
        </mat-radio-group>
        <hr />
        <input-list [fields]="selectedValues()" />
        <button matButton="filled">Opslaan</button>
    `,
    imports: [MatRadioGroup, MatRadioButton, InputList, MatFormField, MatLabel, MatInputModule , MatButtonModule],
    styles: `
        mat-radio-group {
            display: flex;
            flex-direction: column;
        }

        mat-form-field {
            width: 100%;
        }

        button {
            margin-top: 15px;
        }
    `,
})

export class SelectedReport {
    report = input.required<Report>();
    selectedType = signal('');
    selectedValues = signal({});

    constructor(private reportsService: ReportsService) {
        effect(() => {
            this.report();
            this.selectedType.set(this.report().type);
            this.selectedValues.set(this.report().values);
        });
    }

    setSelectedType(type: ReportType) {
        this.selectedType.set(type);
        if (type === this.report().type) {
            this.selectedValues.set(this.report().values);
        } else {
            this.selectedValues.set(this.reportsService.getDefaultReportValuesByType(type));
        }
    }
}