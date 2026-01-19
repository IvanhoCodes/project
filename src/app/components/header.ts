import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'header',
  template: `
    <nav aria-label="Primaire navigatie">
      <mat-toolbar>
        <div class="toolbar-item">
          <img src="/assets/logo.png" height="78px" alt="Rapportage systeem - Startpagina">
        </div>
        <div class="toolbar-item">
          <a routerLink="/" aria-label="Ga naar startpagina" title="Startpagina">
            <mat-icon>home</mat-icon>
          </a>
        </div>
      </mat-toolbar>
    </nav>
  `,
  imports: [MatToolbar, MatIcon, RouterLink],
  styles: `
    nav {
      position: relative;
      z-index: 1000;
    }

    mat-toolbar {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #1F2F36;
      height: 80px;
      padding-left: 0;
      background-color: #fff;
    }
    .toolbar-item {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    a {
      color: black;
      text-decoration: none;
    }

    a:focus {
      outline: 2px solid #1F2F36;
      outline-offset: 2px;
    }
  `,
})

export class Header {}