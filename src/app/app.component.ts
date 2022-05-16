import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = '';
  date: string = '';
  amount: undefined |number;
  height: undefined | number;

  car = { 
    make: 'Toyota',
    model: 'Camry',
    year: 1934
  }
  
  onNameChange(value: KeyboardEvent) {
    const target = value.target as HTMLTextAreaElement;
     this.name = target.value
  }

  onDateChange(value: KeyboardEvent) {
    const target = value.target as HTMLTextAreaElement;
    this.date = target.value;
  }

  onAmountChange(e: KeyboardEvent) {
    const target = e.target as HTMLTextAreaElement;
    this.amount = parseFloat(target.value);
    // console.log(this.amount, 'testing the amount');
  }

  onHeightChange(value: KeyboardEvent) {
    const target = value.target as HTMLTextAreaElement;
    this.height = parseFloat(target.value);

  }
}
