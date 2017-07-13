import { Component } from '@angular/core';

const fileName = 'test';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo.html',
  styleUrls: [`../theming/test/${fileName}.scss`]
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
