import { countryCodes } from './../../data/countryCodes';
import { ICodes } from 'src/app/models/codes';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-option',
  templateUrl: './currency-option.component.html',
  styleUrls: ['./currency-option.component.scss']
})
export class CurrencyOptionComponent {
  @Input() currency: string;
  @Input() selectedCurrency: string;
  @Output() currencySelected = new EventEmitter<string>();
  @Input() codes: ICodes=countryCodes

  selectCurrency() {
    this.currencySelected.emit(this.currency);
  }
}
