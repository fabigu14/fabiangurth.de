import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabiangurth';
  burgerMenuActive: boolean;

  scroll(anchor: string): void {
    let el = document.getElementById(anchor);
    el.scrollIntoView({behavior:"smooth"});
  }

}
