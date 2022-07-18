import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { fadeAnimation } from './fadeAnimation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [fadeAnimation]
})
export class NavbarComponent implements OnInit {

  isSidebarVisible: boolean = false;

  constructor(public scroller: ViewportScroller,
              public router: Router) { }

  ngOnInit(): void {
  }

  scroll(target: string) {
    if (this.router.url === '/')
      this.scroller.scrollToAnchor(target);
    else {
      this.router.navigate(['/']);
      // this.scroller.scrollToAnchor(target);
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
