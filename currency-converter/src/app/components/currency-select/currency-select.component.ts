import { countryCodes } from './../../data/countryCodes';
import { ICodes } from 'src/app/models/codes';
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent {
@Input() selectedCurrency: string;
  @Input() currencyCodes: ICodes;
  @Output() currencySelected = new EventEmitter<string>();
  @Input() codes: ICodes=countryCodes
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(event: MouseEvent) {
    event.stopPropagation();
  }

  selectCurrency(currency: string) {
    this.currencySelected.emit(currency);
    this.isOpen = false;
  }

}
