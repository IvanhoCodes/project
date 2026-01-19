import { Component } from '@angular/core';
import { Header } from './header';
import { Footer } from './footer';

@Component({
  selector: 'layout',
  template: `
    <a href="#main-content" class="skip-link">Spring naar hoofdinhoud</a>
    <div class="layout-container">
      <header></header>
      <main id="main-content" class="content">
        <ng-content />
      </main>
      <footer></footer>
    </div>
  `,
  imports: [Header, Footer],
  styles: `
    .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        z-index: 100;
    }

    .skip-link:focus {
        top: 0;
    }

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