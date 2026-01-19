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
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Documentation {}