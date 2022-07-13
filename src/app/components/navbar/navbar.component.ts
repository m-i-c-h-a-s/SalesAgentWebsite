import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { fadeAnimation } from './fadeAnimation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [fadeAnimation]
})
export class NavbarComponent implements OnInit {

  isSidebarVisible: boolean = false;

  constructor(public scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
