import { Project } from './../../models/Project';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  select(project: Project){
this.selected.emit(project);
  }
}
