##  Angular Savings Calculator
Use Angular to create a savings calculator that will calculate how much a savings account would generate each month if compounded monthly.

This is the same savings calculator that you created with vanilla JavaScript, only this time you will use Angular.

1. Fork this repository to your own GitHub profile.
2. Clone your forked repository to your local development workstation.
3. Use the Angular CLI to create a new Angular app in the existing directory with the following command.
```
ng new angular-savings-calculator --directory ./
```
<br>
![Results Image](angular-savings-calculator.JPG?raw=true)


  Use the following css to style your tables.
```
    <style>
    /* Defines a cleaner look for tables */
    table  { border-collapse: collapse; }
    td, th { border: 1px solid black; padding: 3px 8px; }
    th     { text-align: left; }
    </style>
```

Hints
* To calculate the interest earned for the first month use 'amount * ((rate / 100)/12)'
* inputElement.value returns a string. Convert it to a number with parseFloat(value)
* To round a value to two decimal places use Math.round(myNum * 100) / 100
* To display a number with two decimal places so that 500.50 isn't shown as 500.5, use myNum.toFixed(2).