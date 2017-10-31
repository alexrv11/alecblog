import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component"; 
import { ArticleComponent } from './articles/article.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import {  PresentationComponent } from './presentations/presentation.component';
import { ProjectComponent } from './projects/project.componet';

const dashboardRoutes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'curriculum', pathMatch: 'full'},
      { path: 'curriculum', component: CurriculumComponent },
      { path: 'articles', component: ArticleComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'presentations', component: PresentationComponent }
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule { }
