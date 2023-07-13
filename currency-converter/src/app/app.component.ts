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

  rates: IRates
  
  ngOnInit(): void {
  this.exchangeRateService.getExchangeRate().subscribe(
    (data) => {
      console.log(data); 
      this.rates=data
    },
    (error) => {
      console.error(error);
    }
  );
}
}
