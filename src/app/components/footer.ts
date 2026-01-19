import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'footer',
    template: `
    <nav aria-label="Secundaire navigatie">
        <div>
            <a routerLink="/reports/assigned" class="toolbar-item" aria-label="Toegewezen rapportages">
                <mat-icon>assignment_late</mat-icon>
            </a>
            <a routerLink="/reports/done" class="toolbar-item" aria-label="Afgeronde rapportages">
                <mat-icon>assignment</mat-icon>
            </a>
            <a routerLink="/settings" class="toolbar-item" aria-label="Instellingen">
                <mat-icon>settings</mat-icon>
            </a>
            <a routerLink="/documentation" class="toolbar-item" aria-label="Documentatie">
                <mat-icon>help</mat-icon>
            </a>
        </div>
    </nav>
`,
    styles: `
    nav {
        border-top: 2px solid #1F2F36;
    }

    div {
        display: flex;
        column-gap: 10px;
        padding: 20px;
        background-color: #fff;
    }

    .toolbar-item {
        color: black;
        font-size: 20px;
        word-break: keep-all;
        flex-shrink: 0;
        text-decoration: none;
    }

    .toolbar-item:focus {
        outline: 2px solid #1F2F36;
        outline-offset: 2px;
    }

    .toolbar-item:hover {
        opacity: 0.7;
    }
`,
    imports: [RouterLink, MatIcon],
})

export class Footer { }