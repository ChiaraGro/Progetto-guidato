import { Project } from './../models/Project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
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

  constructor() {}

  getAll(): Project[] {       //ritorna DIRETTAMENTE l'array con i progetti
    return this.projects;
  }

  add(project: Project): void {   //aggiungere un nuovo progetto pushandolo nell'array
    this.projects.push(project);
  }


  get(id:number): Project{    //cercare il progetto tramite id. Accanto a project si può aggiungere | undefined, nel caso in cui non vengono trovato progetti con quell'id
    return this.projects.find(project => project.id === id) as Project; //altrimenti as Project come qui, così è sempre tipo progetto e non undefined
  }
}
