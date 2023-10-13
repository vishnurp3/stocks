import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];


  constructor(private http: HttpClient) {
  }

  get() {
    return this.stocks.slice();
  }

  add(stock: string) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]) {
    return this.http.get<Array<StockInterface>>('http://localhost:3000/stocks?symbol=' + symbols.join());
  }

}
