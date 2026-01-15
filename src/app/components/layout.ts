import { Component } from '@angular/core';
import { Header } from './header';
import { Footer } from './footer';

@Component({
  selector: 'layout',
  template: `
    <div class="layout-container">
      <header></header>
      <div class="content">
        <ng-content />
      </div>
      <footer></footer>
    </div>
  `,
  imports: [Header, Footer],
  styles: `
    header {
      top: 0;
      position: fixed;
      width: 100%;
      z-index: 1000;
    }
    footer {
      bottom: 0;
      position: fixed;
      width: 100%;
    }
    .layout-container {
      padding: 80px 0 67px;
      margin-bottom: 60px;
    }
    .content {
      padding: 0 20px 20px;
    }
`,
})
export class Layout { }