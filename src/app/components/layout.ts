import { Component } from '@angular/core';
import { Header } from '../components/header';
import { TabGroup } from '../components/tab-group';

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <footer></footer>
  `,
  imports: [ Header, TabGroup ],
  styles: `
    header {
        position: fixed;
        top: 0;
        width: 100%;
    }
    tab-group {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`,
})
export class Layout {}