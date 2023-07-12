import { Currency } from './../../models/currency';
import { IRates } from './../../models/rates';
import { Component,OnInit,Input } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service'


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  // constructor(private exchangeRateService: ExchangeRateService) { }
  
  @Input() rates!: IRates

  // form = new FormGroup({
    
  // })

  fromCurrency!: string;
toCurrency!: string;
fromAmount!: number;
toAmount!: number;

  getConversionRatesKeys(): string[] {
  return Object.keys(this.rates.conversion_rates);
  }
  
  convertFromCurrency() {
  if (this.fromCurrency && this.toCurrency) {
    const conversionRate = this.getConversionRate(this.fromCurrency, this.toCurrency);
    if (conversionRate) {
      this.toAmount = this.fromAmount * conversionRate;
    }
  }
}

convertToCurrency() {
  if (this.fromCurrency && this.toCurrency) {
    const conversionRate = this.getConversionRate(this.toCurrency, this.fromCurrency);
    if (conversionRate) {
      this.fromAmount = this.toAmount * conversionRate;
    }
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

  
//   ngOnInit(): void {
//     console.log('this is ExchangeRateHeaderComponent')
//   this.exchangeRateService.getExchangeRate().subscribe(
//     (data) => {
//       // Обработка полученных данных курса валют
//       console.log(data); // Пример вывода данных в консоль
//     },
//     (error) => {
//       // Обработка ошибки
//       console.error(error);
//     }
//   );
//}
}
