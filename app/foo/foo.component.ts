import { Component } from '@angular/core';
import { getBrand } from '../utils';

const brand = getBrand['brand'] || 'test';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo.html',
  styleUrls: [`../theming/test/${brand}.scss`]
})

export class FooComponent {
  name: string;
  constructor() {
    this.name = 'Shinypaper'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
