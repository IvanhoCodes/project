import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'footer',
    template: `
        <hr />
        <div>
            <a routerLink="/reports/assigned" class="toolbar-item">
                <mat-icon>assignment_late</mat-icon>
            </a>
            <a routerLink="/reports/done" class="toolbar-item">
                <mat-icon>assignment</mat-icon>
            </a>
            <a routerLink="/settings" class="toolbar-item">
                <mat-icon>settings</mat-icon>
            </a>
            <a routerLink="/documentation" class="toolbar-item">
                <mat-icon>help</mat-icon>
            </a>
        </div>
    `,
    styles: `
        div {
            display: flex;
            column-gap: 10px;
            padding: 20px;
        }

        hr {
            background: #1F2F36;
        }

        .toolbar-item {
            color: black;
            font-size: 20px;
            word-break: keep-all;
            flex-shrink: 0;
        }
    `,
    imports: [RouterLink, MatIcon],
})

export class Footer { }