import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-internet-page',
  templateUrl: './internet-page.component.html',
  styleUrls: ['./internet-page.component.sass']
})
export class InternetPageComponent implements OnInit {

  internet24MonthsOffers = data.internet24MonthsOffers;
  internetTermlessOffers = data.internetTermlessOffers;
  internet24MonthsOfferTerms = data.internet24MonthsOfferTerms;
  internetTermlessOfferTerms = data.internetTermlessOfferTerms;

  constructor() { }

  ngOnInit(): void {
  }

}
