import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobile = false;

  constructor() { }

  ngOnInit(): void {
    if (document.body.clientWidth <= 900) { 
      this.mobile = true;
    }
    console.log(this.mobile);
    
  }

}
