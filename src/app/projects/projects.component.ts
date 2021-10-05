import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  buttons = [
    {
      "name": "all",
      "isActive": true
    },
    {
      "name": "angular",
      "isActive": false
    },
    {
      "name": "js",
      "isActive": false
    }
  ];

  filterProjects(type: string) {
    this.setActiveButton(type);
  }

  setActiveButton(type: string) {
    this.buttons.forEach(button => {
      if(button['name'] == type){
        button['isActive'] = true;
      }
      else{
        button['isActive'] = false;
      }
    });
  }
}
