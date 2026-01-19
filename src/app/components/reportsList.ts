import { Component, input } from "@angular/core";
import { Report, ReportMain } from "../models/reports.model";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { ReportsService } from "../services/reports.service";
import { SelectedReport } from "./selectedReport";

@Component({
    selector: "reports-list",
    template: `
        <mat-accordion multi="false">
            @for (report of reports(); track report.id) {
                <mat-expansion-panel 
                    (opened)="setSelectedReport(report.id)"
                    [attr.aria-label]="'Rapportage: ' + report.name">
                    <mat-expansion-panel-header role="button" [attr.aria-expanded]="selectedReport?.id === report.id">
                        {{ report.name }}
                    </mat-expansion-panel-header>
                    @if (selectedReport) {
                        @defer {
                            <selected-report [report]="selectedReport" />
                        } @loading (minimum 500ms) {
                            <div role="status" aria-live="polite" aria-atomic="true">
                                <p>Rapportage laden...</p>
                            </div>
                        } @placeholder (minimum 500ms) {
                            <div role="status" aria-live="polite" aria-atomic="true">
                                <p>Rapportage laden...</p>
                            </div>
                        } @error {
                            <div role="alert" aria-live="assertive">
                                <p>Fout bij het laden van rapportage. Probeer het opnieuw.</p>
                            </div>
                        }
                    }
                </mat-expansion-panel>
            }
        </mat-accordion>
    `,
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatListModule, MatInputModule, MatButtonModule, SelectedReport],
})

export class ReportsList {
    reports = input.required<ReportMain[]>();
    selectedReport: Report | undefined = undefined;
    public Object = Object;

    constructor(private reportsService: ReportsService) { }

    toCorrectCase(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    async setSelectedReport(id: number) {
        if (this.selectedReport && this.selectedReport.id === id) {
            return;
        } else {
            this.selectedReport = undefined;
            try {
                this.selectedReport = await this.reportsService.getReportById(id);
            } catch (error) {
                console.error('Failed to load report:', error);
            }
        }
    }
}