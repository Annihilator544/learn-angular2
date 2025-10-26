import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
