import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import data from '../../../assets/data.json';

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.sass']
})
export class PacketsComponent implements OnInit {

  packetsData = data.packets;

  constructor(public scroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  scroll(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
