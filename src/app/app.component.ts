import { Component } from '@angular/core';
import { CalcService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
  private calcService: CalcService) {}

  title = 'Savings Rate Calculator';
  amount;
  rate;
  years;
  savingsRows = [];

  calculate(): void {
    this.savingsRows = this.calcService.calculateService(this.amount, this.rate, this.years);
  }

  reset(): void {
    this.savingsRows = [];
    this.amount = null;
    this.rate = null;
    this.years = null;
  }
}