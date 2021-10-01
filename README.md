# FXCurrencyExtension
This is a simple chrome extension that can convert any amount of any currency to any other destination currency. 

The user first enters the two needed currencies in string format (case insensitive). Afterwards, they press the 'submit' button.
In popup.js, an EventListener is assigned to the button, and upon the 'click' event it takes the string input values and saves them.
The string inputs are then used to access the JSON object from the fixer.io currency conversion API. After using the currency values from fixer.io to to convert
between currencies, the program then modifies the HTML to show the result. In addition, along with every successful conversion, the time and date of the conversion is
given to show accuracy.

If the string inputted is not a three letter FX code or if the amount converted is <= 0 or not a valid integer, then the program reads 'invalid input.'
