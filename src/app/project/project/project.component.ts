import { Project } from './../../models/Project';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  selectedProject!: Project;

  projects: Project[] = [
    {
      id: 1,
      code: 'Nyftyf',
      name: 'Progetto A',
      description: 'ciao',
      start: new Date(2021, 1, 30),
      end: new Date(2022, 1, 1),
      priority: 'medium',
      done: true,
      tasks: [],
    },
    {
      id: 2,
      code: 'hfhfhf',
      name: 'Progetto B',
      description: 'ciao',
      start: new Date(2021, 1, 30),
      end: new Date(2022, 1, 1),
      priority: 'low',
      done: true,
      tasks: [],
    },
    {
      id: 3,
      code: 'hfgjyhfv',
      name: 'Progetto C',
      description: 'ciao',
      start: new Date(2021, 1, 30),
      priority: 'high',
      done: false,
      tasks: [],
    },
  ];

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
