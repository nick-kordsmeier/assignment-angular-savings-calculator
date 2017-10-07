import { Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { SavingsRow } from './savings-row';

@Injectable()
export class CalcService {
    constructor() {}
 
    calculateService(amount: number, rate: number, years: number): SavingsRow[] {
        const NUM_MONTHS_YEAR = 12;
        let savingsRows = [];
 
        // Initialize the balance variable (setting equal to starting amount).
        let balance = amount;
      
        // Loop through the number of months to be considered, calculating interest each month and the cumulative balance.
        // Relevant output values are added to the outputTable variable.
        for (let i = 1; i <= years * NUM_MONTHS_YEAR; i++) {
            let month = i;
            let interestValue = balance * ((rate / 100) / 12);
            balance += interestValue;

            let savingsRow: SavingsRow = {
                month: month,
                interest: interestValue,
                balance: balance
            }
            
            savingsRows.push(savingsRow);
        }
        return savingsRows;
    }
}
