import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<any> {
  const apiUrl = `https://v6.exchangerate-api.com/v6/78a13115cecea575ac813357/latest/USD`; 
  return this.http.get(apiUrl);
}
}
