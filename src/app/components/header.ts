import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'header',
  template: `
    <mat-toolbar>
      <div class="toolbar-item">
        <img src="/logo.png" height="78px">
      </div>
      <div class="toolbar-item">
        <a routerLink="/">
          <mat-icon>home</mat-icon>
        </a>
      </div>
    </mat-toolbar>
  `,
  imports: [MatToolbar, MatIcon, RouterLink],
  styles: `
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
    }
  `,
})

export class Header {}