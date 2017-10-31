import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from '@angular/material';
import { ArticleComponent } from './articles/article.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProjectComponent } from './projects/project.componet';
import { PresentationComponent } from './presentations/presentation.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    ArticleComponent,
    CurriculumComponent,
    ProjectComponent,
    PresentationComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
