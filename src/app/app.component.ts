import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';

  onNameChange(value: KeyboardEvent) {
    const target = value.target as HTMLTextAreaElement;
     this.name = target.value
  }
}
