import { Project } from '../../models/Project';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit {
  selectedProject!: Project;

  projects: Project[] = [];

  constructor() {
    // delete this.projects[0].end; //elimina, modifica, aggiunge una proprietà
    // this.projects = []; //svuoto l'array dei progetti
  }

  ngOnInit(): void {}

  selectProject(project: Project) {
    this.selectedProject = project; //metto dentro selectedproject che sta sopra, e viene stampato nel p, il valore che mi trova questa funzione al click
  }

  submitProjectForm(project: Project) {
    //metodo per fare il submit del form
    this.projects.push({
      ... project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: []
    });
  }
}
