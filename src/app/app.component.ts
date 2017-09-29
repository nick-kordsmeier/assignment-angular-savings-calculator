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
  outputArr = [];

  calculate(): void {
    this.outputArr = this.calcService.calculateService(this.amount, this.rate, this.years);
    console.log(this.outputArr)
  }

  reset(): void {
    this.amount = "";
    this.rate = "";
    this.years = "";
  }
}