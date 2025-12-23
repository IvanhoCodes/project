import { Component, input, effect } from "@angular/core";
import { Report } from "../models/reports.model";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatRadioGroup, MatRadioButton } from "@angular/material/radio";

@Component({
    selector: "reports-list",
    template: `
        <mat-accordion multi="false">
            @for (inputField of inputFields; track inputField) {
                <mat-expansion-panel>
                    <mat-expansion-panel-header>{{ inputField.name }}</mat-expansion-panel-header>
                    <mat-radio-group value="{{ inputField.type }}" disabled="">
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
                    <mat-list>
                    @for (field of Object.entries(inputField.values); track field[0]) {
                        @let key = toCorrectCase(field[0]);
                        @let value = field[1];
                        <mat-list-item>{{ key }}: {{ value }}</mat-list-item>
                    }
                    </mat-list>
                </mat-expansion-panel>
            }
        </mat-accordion>
    `,
    imports: [ MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatListModule, MatRadioGroup, MatRadioButton ],
    styles: `
        mat-radio-group {
            display: flex;
            flex-direction: column;
        }
    `,
})

export class ReportsList {
    reports = input.required<Report[]>();
    inputFields: Report[] = [];
    public Object = Object;

    constructor() {
        effect(() => {
            this.reports();
            this.inputFields = [];
            this.fillInputFields();
        });
    }

    fillInputFields() {
        for (const report of this.reports()) {
            this.inputFields.push({
                name: report.name,
                date: report.date,
                type: report.type,
                values: report.values
            });
        }
    }

    toCorrectCase(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}