import { Component } from '@angular/core';
import { Header } from './header';
import { Footer } from './footer';

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <div>
      <ng-content />
    </div>
    <footer></footer>
  `,
  imports: [ Header, Footer ],
  styles: `
    footer {
      bottom: 0;
      position: absolute;
      width: 100%;
    }
    div {
      padding: 20px 10px;
    }
`,
})
export class Layout {}