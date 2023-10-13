import {Component, Input} from '@angular/core';
import {StockInterface} from "../../services/stocks.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() stock!: StockInterface;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
}
