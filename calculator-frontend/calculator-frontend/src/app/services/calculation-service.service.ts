import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationServiceService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public async calculate(text: string): Promise<any>{
    let symbol = '';
    let operation = '';
    if(text.includes('+')) {
      symbol = '+';
      operation = 'add';
    } else if(text.includes('-')) {
      symbol = '-';
      operation = 'subtract';
    } else if(text.includes('*')) {
      symbol = '*';
      operation = 'multiply';
    } else {
      symbol = '/';
      operation = 'divide';
    }
    let a = Number(text.split(symbol)[0]);
    let b = Number(text.split(symbol)[1]);
    let result = await this.http.get(this.apiUrl + '/' + operation + '?a='  + a + '&b=' + b);
    return lastValueFrom(result);
  }
}
