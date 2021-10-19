import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabiangurth';

  scroll(anchor: string): void {
    console.log(anchor);
    let el = document.getElementById(anchor);
    el.scrollIntoView({behavior:"smooth"});
  }
}
