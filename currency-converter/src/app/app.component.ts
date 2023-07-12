import { rates as data } from './data/rates';

import { ExchangeRateService } from './services/exchange-rate.service';
import { IRates } from './models/rates';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'currency-converter';

  constructor(private exchangeRateService: ExchangeRateService){}

  rates: IRates=data
  
  ngOnInit(): void {
    console.log('this is ExchangeRateHeaderComponent')
  this.exchangeRateService.getExchangeRate().subscribe(
    (data) => {
      // Обработка полученных данных курса валют
      console.log(data); // Пример вывода данных в консоль
      this.rates=data
    },
    (error) => {
      // Обработка ошибки
      console.error(error);
    }
  );
}
}
