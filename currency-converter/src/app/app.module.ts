import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateHeaderComponent } from './components/exchange-rate-header/exchange-rate-header.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { CurrencyOptionComponent } from './components/currency-option/currency-option.component';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateHeaderComponent,
    CurrencyConverterComponent,
    CurrencySelectComponent,
    CurrencyOptionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
