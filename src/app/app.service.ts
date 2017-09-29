import { Injectable } from '@angular/core';

import { AppComponent } from './app.component';

@Injectable()
export class CalcService {
    numAmount;
    numRate;
    numYears;
    balance;
    i;
    interestValue;
    outputArr = [];
  
    calculateService(amount, rate, years): any {
      this.numAmount = parseFloat(amount);
      this.numRate = parseFloat(rate);
      this.numYears = parseFloat(years);
  
      // Initialize the balance variable (setting equal to starting amount).
      this.balance = this.numAmount;
      
          // Loop through the number of months to be considered, calculating interest each month and the cumulative balance.
          // Relevant output values are added to the outputTable variable.
          for (this.i = 1; this.i <= this.numYears * 12; this.i++) {
              this.interestValue = Math.round(this.balance * ((this.numRate / 100) / 12) * 100) / 100;
              this.balance += this.interestValue;

              this.outputArr.push({month: this.i, interest: this.interestValue, balance: Math.round(this.balance * 100) / 100});
            }
            console.log(this.outputArr);
              return this.outputArr;
          }
    }
