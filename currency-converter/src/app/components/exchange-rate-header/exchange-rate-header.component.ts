import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service'

@Component({
  selector: 'app-exchange-rate-header',
  templateUrl: './exchange-rate-header.component.html',
  styleUrls: ['./exchange-rate-header.component.scss']
})
export class ExchangeRateHeaderComponent implements OnInit {
  constructor(private exchangeRateService: ExchangeRateService) { }
  
  ngOnInit(): void {
    console.log('this is ExchangeRateHeaderComponent')
  this.exchangeRateService.getExchangeRate().subscribe(
    (data) => {
      // Обработка полученных данных курса валют
      console.log(data); // Пример вывода данных в консоль
    },
    (error) => {
      // Обработка ошибки
      console.error(error);
    }
  );
}

}
