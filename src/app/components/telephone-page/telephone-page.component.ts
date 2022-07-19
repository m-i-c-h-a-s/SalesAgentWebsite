import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-telephone-page',
  templateUrl: './telephone-page.component.html',
  styleUrls: ['./telephone-page.component.sass']
})
export class TelephonePageComponent implements OnInit {

  telephoneOffersNetiaMobile = data.telephoneOffersNetiaMobile;
  telephoneOffersNetiaMobile5G = data.telephoneOffersNetiaMobile5G;
  telephoneOffersLandlinePhone = data.telephoneOffersLandlinePhone;
  telephoneNetiaMobileOfferTerms = data.telephoneNetiaMobileOfferTerms;
  telephoneNetiaMobile5GOfferTerms = data.telephoneNetiaMobile5GOfferTerms;
  telephoneLandlinePhoneOfferTerms = data.telephoneLandlinePhoneOfferTerms;

  constructor() { }

  ngOnInit(): void {
  }

}
