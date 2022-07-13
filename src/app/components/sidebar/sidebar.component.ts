import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Output("toggleSidebar") toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor(public scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(target: string) {
    this.scroller.scrollToAnchor(target);
    this.toggleSidebar.emit()
  }

}
