import { Component, EventEmitter, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobile = false;
  burgerMenuActive = false;

  @Output() anchorElement = new EventEmitter<string>();
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (document.body.clientWidth <= 900) { 
      this.mobile = true;
    }
  }

  setState(){
    if(!this.burgerMenuActive){
      this.burgerMenuActive = true;
      
    }
    else{
      this.burgerMenuActive = false;
    }
    this.toggle.emit(this.burgerMenuActive);
    
  }



  setAnchor(anchor: string) {
    this.anchorElement.emit(anchor);
  }

}
