import { Project } from './../../models/Project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project!: Project;
  // project!: Partial <Project>; //con partial tutte le propriietà vengono rese opzionali


  constructor() { }

  ngOnInit(): void {
  }

}
