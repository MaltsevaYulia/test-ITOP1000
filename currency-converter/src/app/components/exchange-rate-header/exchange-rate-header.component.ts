import { IRates } from './../../models/rates';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-header',
  templateUrl: './exchange-rate-header.component.html',
  styleUrls: ['./exchange-rate-header.component.scss']
})
export class ExchangeRateHeaderComponent  {
  
  @Input() rates!: IRates

}
