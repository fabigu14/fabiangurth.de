import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  buttons= [
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

  constructor() { }

  ngOnInit(): void {
  }

}
