import { ProjectContainerComponent } from './project/project-container/project-container.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./dashboard/home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectContainerComponent}
];


@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
