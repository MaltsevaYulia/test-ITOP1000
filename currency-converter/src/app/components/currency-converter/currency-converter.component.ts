import { countryCodes } from './../../data/countryCodes';
import { IRates } from './../../models/rates';
import { Component,Input} from '@angular/core';
import { ICodes } from 'src/app/models/codes';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent  {
  
  @Input() rates!: IRates 
  @Input() codes: ICodes=countryCodes

  fromCurrency = 'USD';
  toCurrency = 'UAH';
  fromAmount = 1;
  toAmount: number 

  getConversionRatesKeys(): string[] {
  return Object.keys(this.rates.conversion_rates);
  }
  
  convertFromCurrency() {
  if (this.fromCurrency && this.toCurrency ) {
    const conversionRate = this.getConversionRate(this.fromCurrency, this.toCurrency);
    if (conversionRate) {
      const result =+(this.fromAmount * conversionRate).toFixed(4)
      // this.toAmount = this.fromAmount * conversionRate;
      this.toAmount =result
    }
  }
}

convertToCurrency() {
  if (this.fromCurrency && this.toCurrency) {
    const conversionRate = this.getConversionRate(this.toCurrency, this.fromCurrency);
    if (conversionRate) {
      const result= +(this.toAmount * conversionRate).toFixed(4)
      // this.fromAmount = this.toAmount * conversionRate;
      this.fromAmount = result
    }
  }
}
 
  selectCurrency(currency: string, target: string) {
  if (target === 'fromCurrency') {
    this.fromCurrency = currency;
  } else if (target === 'toCurrency') {
    this.toCurrency = currency;
  }
  
}

  getConversionRate(fromCurrency: string, toCurrency: string): number | undefined {
  if (this.rates && this.rates.conversion_rates) {
    if (this.rates.conversion_rates.hasOwnProperty(fromCurrency) && this.rates.conversion_rates.hasOwnProperty(toCurrency)) {
      const fromCurrencyRate = this.rates.conversion_rates[fromCurrency];
      const toCurrencyRate = this.rates.conversion_rates[toCurrency];

      const conversionRate = toCurrencyRate / fromCurrencyRate;

      return conversionRate;
    }
  }

  return undefined;
  }
  

}
