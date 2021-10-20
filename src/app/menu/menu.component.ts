import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobile = false;

  @Output() anchorElement = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (document.body.clientWidth <= 900) { 
      this.mobile = true;
    }
  }

  setAnchor(anchor: string) {
    this.anchorElement.emit(anchor);
  }

}
