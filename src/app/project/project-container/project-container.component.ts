import { ProjectService } from './../project.service';
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

  constructor(private projectService: ProjectService) {}
    // delete this.projects[0].end; //elimina, modifica, aggiunge una proprietà
    // this.projects = []; //svuoto l'array dei progetti


  ngOnInit(): void {
    this.projects = this.projectService.getAll(); //carica i progetti
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }
    // this.selectedProject = project;
    // SENZA SERVICE metto dentro selectedproject che sta sopra, e viene stampato nel p, il valore che mi trova questa funzione al click


  submitProjectForm(project: Project) {
    this.projectService.add(project);
    };
    //metodo per fare il submit del form, aggiungendo un progetto tramite form
  }

