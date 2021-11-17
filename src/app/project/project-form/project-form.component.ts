import { Project } from './../../models/Project';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm){
    this.submitted.emit({... f.value});
    console.log(f.value);
  }

}
