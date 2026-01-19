import { Component } from '@angular/core';
import { Layout } from './components/layout';

@Component({
  selector: 'page',
  template: `
    <layout>
      <h1>Welkom</h1>
    </layout>
  `,
  imports: [ Layout ],
  styles: `
    layout {
      background-color: #f5f5f5;
    }
  `,
})
export class Home {}