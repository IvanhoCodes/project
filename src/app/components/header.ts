import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'header',
  template: `
    <mat-toolbar>
      <div class="toolbar-item">
        <span>RealEstateCare</span>
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
    }
    .toolbar-item {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  `,
})

export class Header {}