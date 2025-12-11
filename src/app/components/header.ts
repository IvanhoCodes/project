import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'header',
  template: `
    <mat-toolbar>
      <div class="toolbar-item">
        <img src="/logo.png" height="78px">
      </div>
      <div class="toolbar-item">
        <button matIconButton class="example-icon" aria-label="Example icon-button with menu icon">
          <mat-icon fontIcon="menu"></mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  imports: [ MatToolbar, MatIcon ],
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
      gap: 5px;
      align-items: center;
    }
  `,
})

export class Header {}