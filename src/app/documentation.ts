import { Component } from '@angular/core';
import { Layout } from './components/layout';

@Component({
  selector: 'page',
  template: `
    <layout>
      <h1>Documentatie</h1>
    </layout>
  `,
  imports: [ Layout ],
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Documentation {}