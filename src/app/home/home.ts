import { Component } from '@angular/core';
import { Layout } from '../components/layout';

@Component({
  selector: 'app-home',
  template: `
    <layout />
  `,
  imports: [ Layout ],
  styles: `.example-spacer {
    flex: 1 1 auto;
  }`,
})
export class Home {}