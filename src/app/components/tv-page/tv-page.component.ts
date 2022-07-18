import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-tv-page',
  templateUrl: './tv-page.component.html',
  styleUrls: ['./tv-page.component.sass']
})
export class TvPageComponent implements OnInit {
  tvPacketsData = data.tvPackets;

  constructor() { }

  ngOnInit(): void {
  }

}
