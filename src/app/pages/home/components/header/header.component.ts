import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() headerOutputParams = new EventEmitter();
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }
  search(event: any) {
    this.headerOutputParams.emit({ isSearch: true, value: event.target.value })
  }
  toggleMenu() {
    this.document.body.classList.add('sidenav-collapse');
  }
}
